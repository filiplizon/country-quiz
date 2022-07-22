import React, { useState, useEffect } from 'react';
import { db } from 'firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import {
  StyledRankingsWrapper,
  StyledButton,
  StyledButtonContainer,
  StyledGameDetail,
  StyledGameDetailsRow,
  StyledGameDetailsTitle,
  StyledGameDetailsTitles,
  StyledHeading,
  StyledRankings,
} from './Ranking.styles';

/* eslint-disable no-return-assign */
const Rankings = ({ setPanelTypeFn, setPlayerToDisplay }) => {
  const types = ['flags', 'capitals'];
  const levels = ['easy', 'medium', 'hard'];
  const [type, setType] = useState('flags');
  const [level, setLevel] = useState('easy');
  const [isActiveType, setActiveType] = useState(0);
  const [isActiveLevel, setActiveLevel] = useState(0);
  const [games, setGames] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const users = [];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <StyledGameDetailsRow key={item.id}>
              <StyledGameDetail>{i + 1}</StyledGameDetail>
              <StyledGameDetail
                className="user"
                onClick={() => {
                  setPanelTypeFn('profile');
                  setPlayerToDisplay(allUsers.find((user) => user.name === item.user));
                }}
              >
                {item.user}
              </StyledGameDetail>
              <StyledGameDetail>{item.points}</StyledGameDetail>
              <StyledGameDetail>
                {checkIfNumberIsLessThan10(item.time.minutes)}:
                {checkIfNumberIsLessThan10(item.time.seconds)}:
                {checkIfNumberIsLessThan10(item.time.miliseconds)}
              </StyledGameDetail>
              <StyledGameDetail>{item.date}</StyledGameDetail>
            </StyledGameDetailsRow>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(games.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(games.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % games.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  function sortByPoints(a, b) {
    return b.points - a.points;
  }

  function sortByTime(a, b) {
    const isMorePoints = a.points >= b.points;
    return isMorePoints && a.time.total - b.time.total;
  }

  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, 'users'), where('gamesPlayed', '>', 0));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setAllUsers(users);
      const allGames = users.map((user) => user.games).flat(1);
      const flagsGames = allGames.filter((game) => game.type === 'flags');
      const capitalsGames = allGames.filter((game) => game.type === 'capitals');
      const flagsGamesByLevel = {
        easy: flagsGames.filter((game) => game.level === 'easy'),
        medium: flagsGames.filter((game) => game.level === 'medium'),
        hard: flagsGames.filter((game) => game.level === 'hard'),
      };
      const capitalsGamesByLevel = {
        easy: capitalsGames.filter((game) => game.level === 'easy'),
        medium: capitalsGames.filter((game) => game.level === 'medium'),
        hard: capitalsGames.filter((game) => game.level === 'hard'),
      };
      const sortedGames = {
        flags: {
          easy: flagsGamesByLevel.easy.sort(sortByPoints).sort(sortByTime),
          medium: flagsGamesByLevel.medium.sort(sortByPoints).sort(sortByTime),
          hard: flagsGamesByLevel.hard.sort(sortByPoints).sort(sortByTime),
        },
        capitals: {
          easy: capitalsGamesByLevel.easy.sort(sortByPoints).sort(sortByTime),
          medium: capitalsGamesByLevel.medium.sort(sortByPoints).sort(sortByTime),
          hard: capitalsGamesByLevel.hard.sort(sortByPoints).sort(sortByTime),
        },
      };
      const sortedByType = sortedGames[type];
      const sortedByLevel = sortedByType[level];
      setGames(sortedByLevel);
    };
    getUsers();
  }, [type, level]);

  return (
    <StyledRankingsWrapper>
      <StyledHeading>Rankings</StyledHeading>
      <StyledButtonContainer>
        {types.map((el, i) => (
          <StyledButton
            key={el}
            className={isActiveType === i && 'active'}
            onClick={() => {
              setType(el);
              setActiveType(i);
            }}
          >
            {el}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <StyledButtonContainer>
        {levels.map((el, i) => (
          <StyledButton
            key={el}
            className={isActiveLevel === i && 'active'}
            onClick={() => {
              setLevel(el);
              setActiveLevel(i);
            }}
          >
            {el}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <StyledRankings>
        <StyledGameDetailsTitles>
          <StyledGameDetailsTitle>Position</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>User</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Points</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Time</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Date</StyledGameDetailsTitle>
        </StyledGameDetailsTitles>
        <PaginatedItems itemsPerPage={7} />
      </StyledRankings>
    </StyledRankingsWrapper>
  );
};

const mapStateToProps = (state) => {
  const { isFormReset, user } = state;
  return { isFormReset, user };
};

const mapDispatchToProps = (dispatch) => ({
  setPlayerToDisplay: (playerToDisplay) => dispatch(actions.setPlayerToDisplay(playerToDisplay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
