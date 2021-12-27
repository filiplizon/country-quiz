import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

const GamesHistory = ({ user }) => {
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <StyledGameDetailsRow>
              <StyledGameDetail>{item.date}</StyledGameDetail>
              <StyledGameDetail>{item.type}</StyledGameDetail>
              <StyledGameDetail>{item.level}</StyledGameDetail>
              <StyledGameDetail>{item.points}</StyledGameDetail>
              <StyledGameDetail>
                {item.time.minutes < 10 ? `0${item.time.minutes}` : item.time.minutes}:
                {item.time.seconds < 10 ? `0${item.time.seconds}` : item.time.seconds}:
                {item.time.miliseconds < 10 ? `0${item.time.miliseconds}` : item.time.miliseconds}
              </StyledGameDetail>
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
      setCurrentItems(user.games.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(user.games.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % user.games.length;
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

  const detailTypes = ['Date', 'Type', 'Level', 'Points', 'Time'];

  return (
    Object.keys(user).length > 0 && (
      <StyledGamesHistory>
        <StyledNameWrapper>
          <StyledName>History</StyledName>
        </StyledNameWrapper>
        <StyledGameDetailsTitles>
          {detailTypes.map((type) => (
            <StyledGameDetailsTitle>{type}</StyledGameDetailsTitle>
          ))}
        </StyledGameDetailsTitles>
        <StyledHistoryWrapper>
          <PaginatedItems itemsPerPage={5} />
        </StyledHistoryWrapper>
      </StyledGamesHistory>
    )
  );
};

const StyledGamesHistory = styled.div`
  height: 49%;
  background: #fff;
`;

const StyledNameWrapper = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
`;

const StyledName = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledHistoryWrapper = styled.div`
  background-color: #fff;
  height: 80%;

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
  height: 15%;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

const StyledGameDetailsTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  margin: 0 auto;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;
`;

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps)(GamesHistory);
