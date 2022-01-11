import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from 'firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
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

const StyledRankingsWrapper = styled.div`
  height: 100%;
`;

const StyledHeading = styled(Heading)`
  width: 100%;
  height: 20%;
  text-align: center;
  color: #fff;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: #fff;
  color: ${({ theme }) => theme.secondary};

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledRankings = styled.div`
  height: 73%;
  background-color: #fff;
  position: relative;

  & ul {
    list-style: none;
    display: flex;
    margin: 0;
    height: 10%;
    padding: 0 20%;
    width: 100%;
    justify-content: space-around;
    font-size: 1.3rem;
    align-items: center;

    @media (min-width: 1100px) {
      bottom: 10px;
    }

    & li {
      cursor: pointer;

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }

      @media (max-height: 600px) and (orientation: landscape) {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }

      @media (min-width: 1100px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }

      &:hover,
      &.selected {
        font-weight: bold;
        color: ${({ theme }) => theme.secondary};
      }
      &.disabled:hover {
        font-weight: unset;
        cursor: unset;
        color: #000;
      }
    }
  }
`;

const StyledGameDetailsTitles = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

const StyledGameDetailsTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledGameDetailsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: calc(80% / 8);

  &:nth-child(even) {
    background-color: #eee;
  }
`;

const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0;
  }

  @media (min-width: 1100px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  &.user {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.secondary};
      font-weight: bold;
    }
  }
`;

const mapStateToProps = (state) => {
  const { isFormReset, user } = state;
  return { isFormReset, user };
};

const mapDispatchToProps = (dispatch) => ({
  setPlayerToDisplay: (playerToDisplay) => dispatch(actions.setPlayerToDisplay(playerToDisplay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
