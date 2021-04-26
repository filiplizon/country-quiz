import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Flag from 'components/Flag/Flag';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 85px 0 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: 768px) {
    height: 40vh;
    margin: 75px 0 10px;
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
    position: absolute;
    top: 15%;
    left: 25%;
  }
`;

const StyledMessage = styled(Paragraph)`
  opacity: ${({ hidden }) => hidden && 0};
  color: ${({ isAnswerCorrect }) => (isAnswerCorrect ? 'green' : 'red')};
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

const grow = keyframes`
  from {
   transform:scale(0);
   opacity: 0;
  }

  to {
   opacity:1;
   transform:scale(1)
  }
`;

const StyledBox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  animation: ${grow} 0.2s linear both;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    top: 5%;
    right: 20%;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: #fff;
    z-index: 1000;
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
  checked,
  setAnswer,
  answer,
  checkAnswer,
  changeQuestion,
}) => (
  <>
    <StyledBox>
      <Paragraph>Level: {level}</Paragraph>
      <Paragraph>
        Question: {counter + 1} / {quizLength}
      </Paragraph>
      <Paragraph>
        Points: {points} / {quizLength}
      </Paragraph>
    </StyledBox>
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
        onChange={(e) => setAnswer(e.target.value)}
      />
      {checked && (
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
          answer !== '' && !checked && checkAnswer(answer); // eslint-disable-line
          checked && counter < 10 && changeQuestion(); // eslint-disable-line
        }}
      >
        {checked ? 'Next' : 'Check'}
      </Button>
    </StyledWrapper>
  </>
);

const mapStateToProps = (state) => {
  const {
    level,
    quizLength,
    points,
    counter,
    quizType,
    countriesForQuiz,
    answer,
    checked,
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
    checked,
    isAnswerCorrect,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAnswer: (answer) => dispatch(actions.setAnswer(answer)),
  checkAnswer: (answer, correctAnswer) => dispatch(actions.checkAnswer(answer, correctAnswer)),
  changeQuestion: () => dispatch(actions.changeQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionWrapper);
