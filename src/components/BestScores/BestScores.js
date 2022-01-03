import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';

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
        <StyledButtonContainer>
          {types.map((el, i) => (
            <StyledButton
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
                {playerToDisplay.bestScore.flags.easy.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.flags.easy.time.minutes}`
                  : playerToDisplay.bestScore.flags.easy.time.minutes}
                :
                {playerToDisplay.bestScore.flags.easy.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.flags.easy.time.seconds}`
                  : playerToDisplay.bestScore.flags.easy.time.seconds}
                :
                {playerToDisplay.bestScore.flags.easy.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.flags.easy.time.miliseconds}`
                  : playerToDisplay.bestScore.flags.easy.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Medium: {playerToDisplay.bestScore.flags.medium.points} / {quizLength} -{' '}
                {playerToDisplay.bestScore.flags.medium.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.flags.medium.time.minutes}`
                  : playerToDisplay.bestScore.flags.medium.time.minutes}
                :
                {playerToDisplay.bestScore.flags.medium.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.flags.medium.time.seconds}`
                  : playerToDisplay.bestScore.flags.medium.time.seconds}
                :
                {playerToDisplay.bestScore.flags.medium.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.flags.medium.time.miliseconds}`
                  : playerToDisplay.bestScore.flags.medium.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Hard: {playerToDisplay.bestScore.flags.hard.points} / {quizLength} -{' '}
                {playerToDisplay.bestScore.flags.hard.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.flags.hard.time.minutes}`
                  : playerToDisplay.bestScore.flags.hard.time.minutes}
                :
                {playerToDisplay.bestScore.flags.hard.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.flags.hard.time.seconds}`
                  : playerToDisplay.bestScore.flags.hard.time.seconds}
                :
                {playerToDisplay.bestScore.flags.hard.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.flags.hard.time.miliseconds}`
                  : playerToDisplay.bestScore.flags.hard.time.miliseconds}
              </StyledParagraph>
            </>
          ) : (
            <>
              <StyledParagraph>
                Easy: {playerToDisplay.bestScore.capitals.easy.points} / {quizLength} -{' '}
                {playerToDisplay.bestScore.capitals.easy.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.capitals.easy.time.minutes}`
                  : playerToDisplay.bestScore.capitals.easy.time.minutes}
                :
                {playerToDisplay.bestScore.capitals.easy.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.easy.time.seconds}`
                  : playerToDisplay.bestScore.capitals.easy.time.seconds}
                :
                {playerToDisplay.bestScore.capitals.easy.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.easy.time.miliseconds}`
                  : playerToDisplay.bestScore.capitals.easy.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Medium: {playerToDisplay.bestScore.capitals.medium.points} / {quizLength} -{' '}
                {playerToDisplay.bestScore.capitals.medium.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.capitals.medium.time.minutes}`
                  : playerToDisplay.bestScore.capitals.medium.time.minutes}
                :
                {playerToDisplay.bestScore.capitals.medium.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.medium.time.seconds}`
                  : playerToDisplay.bestScore.capitals.medium.time.seconds}
                :
                {playerToDisplay.bestScore.capitals.medium.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.medium.time.miliseconds}`
                  : playerToDisplay.bestScore.capitals.medium.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Hard: {playerToDisplay.bestScore.capitals.hard.points} / {quizLength} -{' '}
                {playerToDisplay.bestScore.capitals.hard.time.minutes < 10
                  ? `0${playerToDisplay.bestScore.capitals.hard.time.minutes}`
                  : playerToDisplay.bestScore.capitals.hard.time.minutes}
                :
                {playerToDisplay.bestScore.capitals.hard.time.seconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.hard.time.seconds}`
                  : playerToDisplay.bestScore.capitals.hard.time.seconds}
                :
                {playerToDisplay.bestScore.capitals.hard.time.miliseconds < 10
                  ? `0${playerToDisplay.bestScore.capitals.hard.time.miliseconds}`
                  : playerToDisplay.bestScore.capitals.hard.time.miliseconds}
              </StyledParagraph>
            </>
          )}
        </StyledScoresWrapper>
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

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
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
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.secondary};

  &.active {
    background-color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
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

  @media (min-width: 1100px) {
    /* height: calc(75vh - 300px); */
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  padding: 15px 0;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    /* padding: 10px 0; */
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
