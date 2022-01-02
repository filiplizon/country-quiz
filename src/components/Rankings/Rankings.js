import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from 'firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ReactPaginate from 'react-paginate';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const Rankings = () => {
  const types = ['flags', 'capitals'];
  const levels = ['easy', 'medium', 'hard'];
  const [type, setType] = useState('flags');
  const [level, setLevel] = useState('easy');
  const [isActiveType, setActiveType] = useState(0);
  const [isActiveLevel, setActiveLevel] = useState(0);
  const [games, setGames] = useState([]);
  const users = [];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <StyledGameDetailsRow>
              <StyledGameDetail>{i + 1}</StyledGameDetail>
              <StyledGameDetail>{item.user}</StyledGameDetail>
              <StyledGameDetail>{item.points}</StyledGameDetail>
              <StyledGameDetail>
                {item.time.minutes < 10 ? `0${item.time.minutes}` : item.time.minutes}:
                {item.time.seconds < 10 ? `0${item.time.seconds}` : item.time.seconds}:
                {item.time.miliseconds < 10 ? `0${item.time.miliseconds}` : item.time.miliseconds}
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
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: #fff;
  color: ${({ theme }) => theme.secondary};

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
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
    height: 25%;
    padding: 0 20%;
    width: 100%;
    justify-content: space-around;
    font-size: 1.3rem;
    align-items: center;
    position: absolute;
    bottom: 15px;

    @media (min-width: 1100px) {
      bottom: 10px;
    }

    & li {
      cursor: pointer;

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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 5px 0;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

const StyledGameDetailsTitle = styled.button`
  margin: 0;
  padding: 10px 0;
  width: 100%;
  border: none;
  background-color: #fff;
  font-weight: bold;
`;

const StyledGameDetailsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: 10%;

  &:nth-child(even) {
    background-color: #eee;
  }
`;

const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;
`;

export default Rankings;
