import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { db } from 'firebase';
import { doc, setDoc } from 'firebase/firestore';
import illustration from 'assets/images/Location.svg';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import actions from 'actions/actions';

const Summary = ({
  points,
  quizLength,
  resetLevel,
  resetType,
  level,
  time,
  setCountriesLevel,
  setQuizQuestions,
  startQuiz,
  setNextLevel,
  levels,
  user,
  setSidePanelOpen,
}) => {
  const saveDataToDB = async () => {
    const docRef = doc(db, 'users', user.id);
    const { ...currentUser } = user;
    await setDoc(docRef, currentUser);
  };

  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    Object.keys(user).length >= 1 && saveDataToDB();
  }, []);

  return (
    <StyledWrapper>
      <StyledImage src={illustration} alt="" />
      <StyledParagraph>
        You answered correctly to{' '}
        <b>
          {points} / {quizLength}
        </b>{' '}
        questions.
      </StyledParagraph>
      <StyledParagraph>
        Your time:{' '}
        <b>{`${time.minutes < 10 ? `0${time.minutes}` : time.minutes}:${
          time.seconds < 10 ? `0${time.seconds}` : time.seconds
        }:${time.miliseconds < 10 ? `0${time.miliseconds}` : time.miliseconds}`}</b>
      </StyledParagraph>

      <StyledWrapper row>
        <Button
          secondary
          onClick={() => {
            resetLevel(level);
            setCountriesLevel();
            setQuizQuestions(level);
            startQuiz();
            setSidePanelOpen(false);
          }}
        >
          Try again
        </Button>
        {level !== 'hard' ? (
          <Button
            onClick={() => {
              resetLevel();
              setNextLevel(level);
              setQuizQuestions(levels[level].next);
              startQuiz();
              setSidePanelOpen(false);
            }}
            secondary
          >
            Next level
          </Button>
        ) : (
          <Button
            onClick={() => {
              resetLevel();
              resetType();
            }}
            secondary
          >
            Finish game
          </Button>
        )}
      </StyledWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ row }) => (row ? '' : '50%')};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  @media (min-width: 1100px) {
    width: ${({ row }) => (row ? '' : '90%')};
  }
`;

const StyledImage = styled.img`
  height: 160px;

  @media (min-width: 360px) {
    height: 215px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 350px;
  }

  @media (min-width: 1100px) {
    height: 200px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5px;
  width: 90%;
  text-align: center;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  const { points, quizLength, level, levels, quizType, time, user } = state;
  return { points, quizLength, level, levels, quizType, time, user };
};

const mapDispatchToProps = (dispatch) => ({
  resetLevel: (level) => dispatch(actions.resetLevel(level)),
  resetType: () => dispatch(actions.resetType()),
  setNextLevel: (level) => dispatch(actions.setNextLevel(level)),
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  startQuiz: () => dispatch(actions.startQuiz()),
  saveGame: () => dispatch(actions.saveGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
