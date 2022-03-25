import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';
import NoDataInfo from 'components/NoDataInfo/NoDataInfo';

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

const StyledBestScores = styled.div`
  color: #fff;
  height: 55%;
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
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid #fff;
`;

const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.secondary};

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

  &.active {
    background-color: ${({ theme }) => theme.primary};
  }

  &:nth-child(1) {
    border-right: 1px solid #fff;
  }
`;

const StyledScoresWrapper = styled.div`
  background-color: #fff;
  height: 65%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  padding: 15px 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 5px 0;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const mapStateToProps = (state) => {
  const { playerToDisplay, quizLength } = state;
  return {
    playerToDisplay,
    quizLength,
  };
};

export default connect(mapStateToProps)(BestScores);
