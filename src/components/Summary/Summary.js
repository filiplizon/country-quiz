import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { db } from 'firebase';
import { doc, setDoc } from 'firebase/firestore';
import actions from 'actions/actions';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import illustration from 'assets/images/Location.svg';

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
        <b>
          {checkIfNumberIsLessThan10(time.minutes)}:{checkIfNumberIsLessThan10(time.seconds)}:
          {checkIfNumberIsLessThan10(time.miliseconds)}
        </b>
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
  width: 90%;
  height: ${({ row }) => (row ? '' : '50%')};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ row }) => (row ? '10px' : '0')};

  @media (min-width: 768px) {
    width: ${({ row }) => (row ? '55%' : '90%')};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: ${({ row }) => (row ? '70%' : '90%')};
  }

  @media (min-width: 1100px) {
    width: ${({ row }) => (row ? '' : '100%')};
    margin-top: ${({ row }) => (row ? '10px' : '50px')};
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

  @media (max-height: 600px) and (orientation: landscape) {
    height: 100px;
  }

  @media (min-width: 1100px) {
    height: 200px;
  }

  @media (min-width: 1600px) {
    height: 300px;
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

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const mapStateToProps = (state) => {
  const { points, quizLength, level, levels, time, user } = state;
  return { points, quizLength, level, levels, time, user };
};

const mapDispatchToProps = (dispatch) => ({
  resetLevel: (level) => dispatch(actions.resetLevel(level)),
  resetType: () => dispatch(actions.resetType()),
  setNextLevel: (level) => dispatch(actions.setNextLevel(level)),
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  startQuiz: () => dispatch(actions.startQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
