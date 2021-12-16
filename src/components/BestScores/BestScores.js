import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';

const BestScores = ({ user, quizLength }) => {
  const [type, setType] = useState('Flags');
  const types = ['Flags', 'Capitals'];
  const [isActive, setActive] = useState(0);
  return (
    Object.keys(user).length > 0 && (
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
                Easy: {user.bestScore.flags.easy.points} / {quizLength} -{' '}
                {user.bestScore.flags.easy.time.minutes < 9
                  ? `0${user.bestScore.flags.easy.time.minutes}`
                  : user.bestScore.flags.easy.time.minutes}
                :
                {user.bestScore.flags.easy.time.seconds < 9
                  ? `0${user.bestScore.flags.easy.time.seconds}`
                  : user.bestScore.flags.easy.time.seconds}
                :
                {user.bestScore.flags.easy.time.miliseconds < 9
                  ? `0${user.bestScore.flags.easy.time.miliseconds}`
                  : user.bestScore.flags.easy.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Medium: {user.bestScore.flags.medium.points} / {quizLength} -{' '}
                {user.bestScore.flags.medium.time.minutes < 9
                  ? `0${user.bestScore.flags.medium.time.minutes}`
                  : user.bestScore.flags.medium.time.minutes}
                :
                {user.bestScore.flags.medium.time.seconds < 9
                  ? `0${user.bestScore.flags.medium.time.seconds}`
                  : user.bestScore.flags.medium.time.seconds}
                :
                {user.bestScore.flags.medium.time.miliseconds < 9
                  ? `0${user.bestScore.flags.medium.time.miliseconds}`
                  : user.bestScore.flags.medium.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Hard: {user.bestScore.flags.hard.points} / {quizLength} -{' '}
                {user.bestScore.flags.hard.time.minutes < 9
                  ? `0${user.bestScore.flags.hard.time.minutes}`
                  : user.bestScore.flags.hard.time.minutes}
                :
                {user.bestScore.flags.hard.time.seconds < 9
                  ? `0${user.bestScore.flags.hard.time.seconds}`
                  : user.bestScore.flags.hard.time.seconds}
                :
                {user.bestScore.flags.hard.time.miliseconds < 9
                  ? `0${user.bestScore.flags.hard.time.miliseconds}`
                  : user.bestScore.flags.hard.time.miliseconds}
              </StyledParagraph>
            </>
          ) : (
            <>
              <StyledParagraph>
                Easy: {user.bestScore.capitals.easy.points} / {quizLength} -{' '}
                {user.bestScore.capitals.easy.time.minutes < 9
                  ? `0${user.bestScore.capitals.easy.time.minutes}`
                  : user.bestScore.capitals.easy.time.minutes}
                :
                {user.bestScore.capitals.easy.time.seconds < 9
                  ? `0${user.bestScore.capitals.easy.time.seconds}`
                  : user.bestScore.capitals.easy.time.seconds}
                :
                {user.bestScore.capitals.easy.time.miliseconds < 9
                  ? `0${user.bestScore.capitals.easy.time.miliseconds}`
                  : user.bestScore.capitals.easy.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Medium: {user.bestScore.capitals.medium.points} / {quizLength} -{' '}
                {user.bestScore.capitals.medium.time.minutes < 9
                  ? `0${user.bestScore.capitals.medium.time.minutes}`
                  : user.bestScore.capitals.medium.time.minutes}
                :
                {user.bestScore.capitals.medium.time.seconds < 9
                  ? `0${user.bestScore.capitals.medium.time.seconds}`
                  : user.bestScore.capitals.medium.time.seconds}
                :
                {user.bestScore.capitals.medium.time.miliseconds < 9
                  ? `0${user.bestScore.capitals.medium.time.miliseconds}`
                  : user.bestScore.capitals.medium.time.miliseconds}
              </StyledParagraph>
              <StyledParagraph>
                Hard: {user.bestScore.capitals.hard.points} / {quizLength} -{' '}
                {user.bestScore.capitals.hard.time.minutes < 9
                  ? `0${user.bestScore.capitals.hard.time.minutes}`
                  : user.bestScore.capitals.hard.time.minutes}
                :
                {user.bestScore.capitals.hard.time.seconds < 9
                  ? `0${user.bestScore.capitals.hard.time.seconds}`
                  : user.bestScore.capitals.hard.time.seconds}
                :
                {user.bestScore.capitals.hard.time.miliseconds < 9
                  ? `0${user.bestScore.capitals.hard.time.miliseconds}`
                  : user.bestScore.capitals.hard.time.miliseconds}
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
  const { user, quizLength } = state;
  return {
    user,
    quizLength,
  };
};

export default connect(mapStateToProps)(BestScores);
