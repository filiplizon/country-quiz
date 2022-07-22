import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { db } from 'firebase';
import { doc, setDoc } from 'firebase/firestore';
import actions from 'actions/actions';
import { checkIfNumberIsLessThan10 } from 'operations/operations';
import Button from 'components/Button/Button';
import illustration from 'assets/images/Location.svg';
import { StyledWrapper, StyledImage, StyledParagraph } from './Summary.styles';

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
