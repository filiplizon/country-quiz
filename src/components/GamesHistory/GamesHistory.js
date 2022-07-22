import React from 'react';
import { connect } from 'react-redux';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import PaginatedItems from 'components/PaginatedItems/PaginatedItems';
import NoDataInfo from 'components/NoDataInfo/NoDataInfo';
import {
  StyledGamesHistory,
  StyledNameWrapper,
  StyledName,
  StyledHistoryWrapper,
  StyledGameDetailsTitle,
  StyledGameDetailsRow,
  StyledGameDetailsTitles,
  StyledGameDetail,
} from './GamesHistory.styles';

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

const mapStateToProps = (state) => {
  const { playerToDisplay } = state;
  return {
    playerToDisplay,
  };
};

export default connect(mapStateToProps)(GamesHistory);
