import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Button from 'components/Button/Button';
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
const StyledAnswerBox = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 10vh;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    height: 15vh;
    width: 600px;
    bottom: 20vh;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 15vh;
    width: 80%;
    bottom: 10vh;
  }

  @media (min-width: 1100px) {
    height: 15vh;
    width: 80%;
    bottom: 10vh;
  }
`;

const StyledAnswer = styled(Button)`
  height: 50%;
  width: 50%;
  border: 1px solid #fff;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &.correct {
    background-color: green;
  }

  &.active {
    background-color: ${({ theme, isAnswerCorrect, isChecked }) =>
      (isAnswerCorrect && isChecked && 'green') ||
      (!isAnswerCorrect && isChecked && 'red') ||
      (!isChecked && theme.primary)};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.primary};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  border: 1px solid #fff;

  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${({ theme }) => theme.secondary};
    color: #fff;
    height: 8vh;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: 30%;
    height: 5vh;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    width: 30%;
    height: 5vh;
    border: none;
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

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
