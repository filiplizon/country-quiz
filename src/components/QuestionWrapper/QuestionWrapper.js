import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Flag from 'components/Flag/Flag';
import PointBox from 'components/PointBox/PointBox';
import AnswerBox from 'components/AnswerBox/AnswerBox';

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

const StyledWrapper = styled.div`
  height: ${({ quizType }) => (quizType === 'capitals' ? '30vh' : '25vh')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.primary};
`;

const StyledParagraph = styled(Paragraph)`
@media (min-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize.l};
}

@media (max-height: 600px) and (orientation: landscape) {
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 10px;
}

@media (min-width: 1100px) {
  font-size: ${({ theme }) => theme.fontSize.m};
}

@media (min-width: 1600px) {
  font-size: ${({ theme }) => theme.fontSize.l};
`;

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
