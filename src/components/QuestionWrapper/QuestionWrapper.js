// import React from 'react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Flag from 'components/Flag/Flag';
// import Input from 'components/Input/Input';
// import Button from 'components/Button/Button';
import PointBox from 'components/PointBox/PointBox';
import AnswerBox from 'components/AnswerBox/AnswerBox';
import Stopwatch from 'components/Stopwatch/Stopwatch';

const StyledWrapper = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.primary};

  @media (min-width: 1100px) {
  }
`;

const QuestionWrapper = ({
  level,
  quizType,
  countriesForQuiz,
  counter,
  quizLength,
  points,
  // isAnswerCorrect,
  // isChecked,
  // setAnswer,
  // answer,
  // checkAnswer,
  // changeQuestion,
  // setQuizQuestions,
  setCurrentQuestion,
  // setAnswers,
  currentQuestion,
  start,
}) => {
  useEffect(() => {
    setCurrentQuestion(countriesForQuiz[counter], quizType);
    // setAnswers(currentQuestion);
  }, []);
  return (
    <>
      <PointBox>
        <Paragraph>Level: {level}</Paragraph>
        <Paragraph>
          Question: {counter + 1} / {quizLength}
        </Paragraph>
        <Paragraph>
          Points: {points} / {quizLength}
        </Paragraph>
        <Paragraph>
          Time: <Stopwatch start={start} />
        </Paragraph>
      </PointBox>
      <StyledWrapper>
        <Paragraph>
          {quizType === 'flags'
            ? 'Guess what country the flag is:'
            : 'What is capital of this country?'}
        </Paragraph>
        {quizType === 'capitals' ? (
          <Flag flag={currentQuestion.flag} name={currentQuestion.name} quiz="true" />
        ) : (
          <Flag flag={currentQuestion.flag} />
        )}
        <AnswerBox />
      </StyledWrapper>
    </>
  );
};
const mapStateToProps = (state) => {
  const {
    level,
    quizLength,
    points,
    counter,
    quizType,
    countriesForQuiz,
    answer,
    isChecked,
    isAnswerCorrect,
    currentQuestion,
    start,
  } = state;
  return {
    level,
    quizLength,
    points,
    counter,
    quizType,
    countriesForQuiz,
    answer,
    isChecked,
    isAnswerCorrect,
    currentQuestion,
    start,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAnswer: (answer) => dispatch(actions.setAnswer(answer)),
  checkAnswer: (answer, correctAnswer) => dispatch(actions.checkAnswer(answer, correctAnswer)),
  changeQuestion: () => dispatch(actions.changeQuestion()),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  setCurrentQuestion: (question, quizType) =>
    dispatch(actions.setCurrentQuestion(question, quizType)),
  setAnswers: () => dispatch(actions.setAnswers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrapper);
