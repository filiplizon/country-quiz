import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import NoDataInfo from 'components/NoDataInfo/NoDataInfo';
import {
  StyledBestScores,
  StyledNameWrapper,
  StyledName,
  StyledButtonContainer,
  StyledButton,
  StyledScoresWrapper,
  StyledParagraph,
} from './BestScores.styles';

const BestScores = ({ playerToDisplay, quizLength }) => {
  const [type, setType] = useState('Flags');
  const types = ['Flags', 'Capitals'];
  const [isActive, setActive] = useState(0);
  return (
    Object.keys(playerToDisplay).length > 0 && (
      <StyledBestScores>
        <StyledNameWrapper>
          <StyledName>Best score</StyledName>
        </StyledNameWrapper>
        {playerToDisplay.gamesPlayed !== 0 ? (
          <>
            <StyledButtonContainer>
              {types.map((el, i) => (
                <StyledButton
                  key={type + playerToDisplay.games[i].id}
                  className={isActive === i && 'active'}
                  onClick={() => {
                    setType(el);
                    setActive(i);
                  }}
                >
                  {el}
                </StyledButton>
              ))}
            </StyledButtonContainer>
            <StyledScoresWrapper>
              {type === 'Flags' ? (
                <>
                  <StyledParagraph>
                    Easy: {playerToDisplay.bestScore.flags.easy.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.easy.time.minutes)}:
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.easy.time.seconds)}:
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.flags.easy.time.miliseconds,
                    )}
                  </StyledParagraph>
                  <StyledParagraph>
                    Medium: {playerToDisplay.bestScore.flags.medium.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.medium.time.minutes)}
                    :
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.medium.time.seconds)}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.flags.medium.time.miliseconds,
                    )}
                  </StyledParagraph>
                  <StyledParagraph>
                    Hard: {playerToDisplay.bestScore.flags.hard.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.hard.time.minutes)}:
                    {checkIfNumberIsLessThan10(playerToDisplay.bestScore.flags.hard.time.seconds)}:
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.flags.hard.time.miliseconds,
                    )}
                  </StyledParagraph>
                </>
              ) : (
                <>
                  <StyledParagraph>
                    Easy: {playerToDisplay.bestScore.capitals.easy.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.easy.time.minutes,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.easy.time.seconds,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.easy.time.miliseconds,
                    )}
                  </StyledParagraph>
                  <StyledParagraph>
                    Medium: {playerToDisplay.bestScore.capitals.medium.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.medium.time.minutes,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.medium.time.seconds,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.medium.time.miliseconds,
                    )}
                  </StyledParagraph>
                  <StyledParagraph>
                    Hard: {playerToDisplay.bestScore.capitals.hard.points} / {quizLength} -{' '}
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.hard.time.minutes,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.hard.time.seconds,
                    )}
                    :
                    {checkIfNumberIsLessThan10(
                      playerToDisplay.bestScore.capitals.hard.time.miliseconds,
                    )}
                  </StyledParagraph>
                </>
              )}
            </StyledScoresWrapper>
          </>
        ) : (
          <NoDataInfo />
        )}
      </StyledBestScores>
    )
  );
};

const mapStateToProps = (state) => {
  const { playerToDisplay, quizLength } = state;
  return {
    playerToDisplay,
    quizLength,
  };
};

export default connect(mapStateToProps)(BestScores);
