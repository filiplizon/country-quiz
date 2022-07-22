import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import { StyledAnswerBox, StyledAnswer, StyledButton } from './AnswerBox.styles';
/* eslint-disable no-unused-expressions */
const AnswerBox = ({
  answers,
  quizType,
  setCurrentAnswer,
  checkAnswer,
  currentAnswer,
  correctAnswer,
  isChecked,
  isAnswerCorrect,
  changeQuestion,
  setAnswers,
  counter,
  setCurrentQuestion,
  countriesForQuiz,
  currentQuestion,
  saveGame,
  user,
  startQuiz,
  setTime,
  time,
}) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setAnswers(currentQuestion);
    setActive(false);
  }, [currentQuestion]);

  const saveGameWithDate = () => {
    const today = new Date();
    const date = `${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}.${
      today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
    }.${today.getFullYear()}`;
    const id = `${user.id}${today.getDate()}${
      today.getMonth() + 1
    }${today.getFullYear()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
    saveGame(date, id);
  };

  return (
    <>
      <StyledAnswerBox>
        {answers.map((answer, i) =>
          quizType === 'flags' ? (
            <StyledAnswer
              isAnswerCorrect={isAnswerCorrect}
              isChecked={isChecked}
              className={
                isActive === i
                  ? 'active'
                  : `${isChecked && correctAnswer === answer.name && 'correct'}`
              }
              onClick={() => {
                !isChecked && setActive(i);
                setCurrentAnswer(answer.name);
              }}
              key={`${answer.name}-${answer.alpha3Code}`}
            >
              {answer.name}
            </StyledAnswer>
          ) : (
            <StyledAnswer
              isAnswerCorrect={isAnswerCorrect}
              isChecked={isChecked}
              className={
                isActive === i
                  ? 'active'
                  : `${isChecked && correctAnswer === answer.capital && 'correct'}`
              }
              onClick={() => {
                !isChecked && setActive(i);
                setCurrentAnswer(answer.capital);
              }}
              key={`${answer.capital}-${answer.alpha3Code}`}
            >
              {answer.capital}
            </StyledAnswer>
          ),
        )}
      </StyledAnswerBox>
      {isChecked && counter === 9 ? (
        <StyledButton
          onClick={() => {
            isChecked && changeQuestion(counter + 1);
            setTime(time);
            Object.keys(user).length >= 1 ? saveGameWithDate() : startQuiz(true);
          }}
        >
          Finish{' '}
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => {
            currentAnswer && !isChecked && checkAnswer(currentAnswer, correctAnswer);
            isChecked && changeQuestion(counter + 1);
            isChecked &&
              counter !== 9 &&
              setCurrentQuestion(countriesForQuiz[counter + 1], quizType);
          }}
        >
          {isChecked ? 'Next' : 'Check'}
        </StyledButton>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentAnswer: (answer) => dispatch(actions.setCurrentAnswer(answer)),
  checkAnswer: (answer, correctAnswer) => dispatch(actions.checkAnswer(answer, correctAnswer)),
  changeQuestion: (answer, correctAnswer) =>
    dispatch(actions.changeQuestion(answer, correctAnswer)),
  setAnswers: () => dispatch(actions.setAnswers()),
  setCurrentQuestion: (question, quizType) =>
    dispatch(actions.setCurrentQuestion(question, quizType)),
  saveGame: (date, id) => dispatch(actions.saveGame(date, id)),
  startQuiz: (start) => dispatch(actions.startQuiz(start)),
  setTime: (time) => dispatch(actions.setTime(time)),
});

const mapStateToProps = (state) => {
  const {
    answers,
    quizType,
    currentAnswer,
    correctAnswer,
    isChecked,
    isAnswerCorrect,
    countriesForQuiz,
    counter,
    currentQuestion,
    user,
  } = state;
  return {
    answers,
    quizType,
    currentAnswer,
    correctAnswer,
    isChecked,
    isAnswerCorrect,
    countriesForQuiz,
    counter,
    currentQuestion,
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerBox);
