import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import PaginatedItems from 'components/PaginatedItems/PaginatedItems';
import Heading from 'components/Heading/Heading';
import NoDataInfo from 'components/NoDataInfo/NoDataInfo';

const GamesHistory = ({ playerToDisplay }) => {
  const detailTypes = ['Date', 'Type', 'Level', 'Points', 'Time'];

  const currentItem = (item) => (
    <StyledGameDetailsRow key={item.id}>
      <StyledGameDetail>{item.date}</StyledGameDetail>
      <StyledGameDetail>{item.type}</StyledGameDetail>
      <StyledGameDetail>{item.level}</StyledGameDetail>
      <StyledGameDetail>{item.points}</StyledGameDetail>
      <StyledGameDetail>
        {checkIfNumberIsLessThan10(item.time.minutes)}:
        {checkIfNumberIsLessThan10(item.time.seconds)}:
        {checkIfNumberIsLessThan10(item.time.miliseconds)}
      </StyledGameDetail>
    </StyledGameDetailsRow>
  );

  return (
    Object.keys(playerToDisplay).length > 0 && (
      <StyledGamesHistory playerToDisplay={playerToDisplay}>
        <StyledNameWrapper>
          <StyledName>History</StyledName>
        </StyledNameWrapper>
        {playerToDisplay.gamesPlayed !== 0 ? (
          <>
            <StyledGameDetailsTitles>
              {detailTypes.map((type) => (
                <StyledGameDetailsTitle key={playerToDisplay.id + type}>
                  {type}
                </StyledGameDetailsTitle>
              ))}
            </StyledGameDetailsTitles>
            <StyledHistoryWrapper>
              <PaginatedItems
                itemsPerPage={5}
                itemsToPaginate={playerToDisplay.games}
                currentItem={currentItem}
              />
            </StyledHistoryWrapper>
          </>
        ) : (
          <NoDataInfo />
        )}
      </StyledGamesHistory>
    )
  );
};

const StyledGamesHistory = styled.div`
  height: ${({ playerToDisplay }) => (playerToDisplay.gamesPlayed > 0 ? '50%' : '55%')};
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

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledHistoryWrapper = styled.div`
  background-color: #fff;
  height: 80%;
  position: relative;

  & ul {
    list-style: none;
    display: flex;
    margin: 0;
    height: 19%;
    padding: 0 20%;
    width: 100%;
    justify-content: space-around;
    font-size: 1.3rem;
    align-items: center;

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

const StyledGameDetailsTitle = styled.div`
  padding: 10px 0;
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0;
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
  height: 15%;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

const StyledGameDetailsTitles = styled.div`
  width: 100%;
  height: 15%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;

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
`;

const mapStateToProps = (state) => {
  const { playerToDisplay } = state;
  return {
    playerToDisplay,
  };
};

export default connect(mapStateToProps)(GamesHistory);
