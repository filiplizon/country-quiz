import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Flag from 'components/Flag/Flag';
import PointBox from 'components/PointBox/PointBox';
import AnswerBox from 'components/AnswerBox/AnswerBox';
import { StyledWrapper, StyledParagraph } from './QuestionWrapper.styles';

const QuestionWrapper = ({
  quizType,
  countriesForQuiz,
  counter,
  setCurrentQuestion,
  currentQuestion,
}) => {
  const [time, setTimeFn] = useState(0);

  useEffect(() => {
    setCurrentQuestion(countriesForQuiz[counter], quizType);
  }, []);
  return (
    <>
      <PointBox time={time} setTimeFn={setTimeFn} />
      <StyledWrapper>
        <StyledParagraph>
          {quizType === 'flags'
            ? 'Guess what country the flag is:'
            : 'What is capital of this country?'}
        </StyledParagraph>
        {quizType === 'capitals' ? (
          <Flag flag={currentQuestion.flag} name={currentQuestion.name} quiz="true" />
        ) : (
          <Flag flag={currentQuestion.flag} />
        )}
        <AnswerBox time={time} />
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  const { quizType, countriesForQuiz, currentQuestion, counter } = state;
  return {
    quizType,
    countriesForQuiz,
    currentQuestion,
    counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentQuestion: (question, quizType) =>
    dispatch(actions.setCurrentQuestion(question, quizType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrapper);
