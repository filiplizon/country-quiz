import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Flag from 'components/Flag/Flag';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import PointBox from 'components/PointBox/PointBox';

const StyledWrapper = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    height: 40vh;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 65px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    height: 50vh;
    margin: 0;
  }
`;

const StyledMessage = styled(Paragraph)`
  opacity: ${({ hidden }) => hidden && 0};
  color: ${({ isAnswerCorrect }) => (isAnswerCorrect ? '#3BC14A' : 'red')};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1.3rem;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const QuestionWrapper = ({
  level,
  quizType,
  countriesForQuiz,
  counter,
  quizLength,
  points,
  isAnswerCorrect,
  isChecked,
  setAnswer,
  answer,
  checkAnswer,
  changeQuestion,
  setQuizQuestions,
}) => {
  useEffect(() => {
    setQuizQuestions(level);
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
      </PointBox>
      <StyledWrapper>
        <Paragraph>
          {quizType === 'flags'
            ? 'Guess what country the flag is:'
            : 'What is capital of this country?'}
        </Paragraph>
        {quizType === 'capitals' ? (
          <Flag
            flag={countriesForQuiz[counter].flag}
            name={countriesForQuiz[counter].name}
            quiz="true"
          />
        ) : (
          <Flag flag={countriesForQuiz[counter].flag} />
        )}
        <Input
          value={answer}
          placeholder={quizType === 'flags' ? 'Country' : 'Capital'}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === 'Enter' && answer !== '' && !isChecked && checkAnswer(answer); // eslint-disable-line
            isChecked && counter < 10 && changeQuestion(); // eslint-disable-line
          }}
        />
        {isChecked && (
          <StyledMessage isAnswerCorrect={isAnswerCorrect}>
            {isAnswerCorrect
              ? 'Good!'
              : `You're wrong. It's ${
                  quizType === 'flags'
                    ? countriesForQuiz[counter].name
                    : countriesForQuiz[counter].capital
                }.`}
          </StyledMessage>
        )}
        <Button
          secondary
          onClick={() => {
            answer !== '' && !isChecked && checkAnswer(answer); // eslint-disable-line
            isChecked && counter < 10 && changeQuestion(); // eslint-disable-line
          }}
        >
          {isChecked ? 'Next' : 'Check'}
        </Button>
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAnswer: (answer) => dispatch(actions.setAnswer(answer)),
  checkAnswer: (answer, correctAnswer) => dispatch(actions.checkAnswer(answer, correctAnswer)),
  changeQuestion: () => dispatch(actions.changeQuestion()),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrapper);
