import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import illustration from 'assets/images/Location.svg';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import actions from 'actions/actions';

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ row }) => (row ? '' : '60%')};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1200px) {
    width: ${({ row }) => (row ? '' : '40%')};
  }
`;

const StyledImage = styled.img`
  width: 160px;
  height: 160px;

  @media (min-width: 360px) {
    width: 215px;
    height: 215px;
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;
  line-height: 1.5;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Summary = ({
  points,
  quizLength,
  resetLevel,
  resetType,
  level,
  setNextLevel,
  setBestScore,
  quizType,
}) => {
  useEffect(() => {
    setBestScore(points, level, quizType);
  }, []);
  return (
    <StyledWrapper>
      <StyledImage src={illustration} alt="" />
      <StyledParagraph>
        You answered correctly to {points} / {quizLength} questions.
      </StyledParagraph>
      {level !== 'hard' ? (
        <StyledWrapper row>
          <Button
            secondary
            onClick={() => {
              resetLevel();
              resetType();
            }}
          >
            Quiz menu
          </Button>
          {points >= 5 ? (
            <Button
              onClick={() => {
                resetLevel();
                setNextLevel(level);
              }}
              secondary
            >
              Next level
            </Button>
          ) : (
            <Button
              onClick={() => {
                resetLevel(level);
              }}
              secondary
            >
              Try again
            </Button>
          )}
        </StyledWrapper>
      ) : (
        <StyledWrapper row>
          <Button
            secondary
            onClick={() => {
              resetLevel();
              resetType();
            }}
          >
            Quiz menu
          </Button>
          <Button
            onClick={() => {
              resetLevel(level);
            }}
            secondary
          >
            Try again
          </Button>
        </StyledWrapper>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  const { points, quizLength, level, levels, quizType } = state;
  return { points, quizLength, level, levels, quizType };
};

const mapDispatchToProps = (dispatch) => ({
  resetLevel: (level) => dispatch(actions.resetLevel(level)),
  resetType: () => dispatch(actions.resetType()),
  setNextLevel: (level) => dispatch(actions.setNextLevel(level)),
  setBestScore: (score, level, quizType) => dispatch(actions.setBestScore(score, level, quizType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
