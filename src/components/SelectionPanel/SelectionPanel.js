import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import { grow } from 'helpers/animations';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import PointBox from 'components/PointBox/PointBox';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

const StyledIcon = styled.div`
  margin-left: 5px;

  @media (min-width: 768px) {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const SelectionPanel = ({
  quizType,
  chooseLevel,
  chooseType,
  setQuizQuestions,
  quizLength,
  bestScore,
  setCountriesLevel,
}) => (
  <>
    {quizType && (
      <PointBox>
        <Paragraph>Your best scores:</Paragraph>
        {quizType === 'flags' ? (
          <>
            <Paragraph>
              easy: {bestScore.flags.easy} / {quizLength}
            </Paragraph>
            <Paragraph>
              medium: {bestScore.flags.medium} / {quizLength}
            </Paragraph>
            <Paragraph>
              hard: {bestScore.flags.hard} / {quizLength}
            </Paragraph>
          </>
        ) : (
          <>
            <Paragraph>
              easy: {bestScore.capitals.easy} / {quizLength}
            </Paragraph>
            <Paragraph>
              medium: {bestScore.capitals.medium} / {quizLength}
            </Paragraph>
            <Paragraph>
              hard: {bestScore.capitals.hard} / {quizLength}
            </Paragraph>
          </>
        )}
      </PointBox>
    )}
    <InnerWrapper column onClick={() => setCountriesLevel()}>
      <StyledHeading>Welcome to the quiz!</StyledHeading>
      <StyledParagraph>Choose {quizType ? 'level' : 'type'} of the quiz:</StyledParagraph>
      {quizType ? (
        <InnerWrapper>
          <Button
            animation={grow}
            secondary
            onClick={() => {
              chooseLevel('easy');
              setQuizQuestions('easy');
            }}
          >
            Easy
          </Button>
          <Button
            animation={grow}
            animationDelay=".5s"
            secondary
            onClick={() => {
              chooseLevel('medium');
              setQuizQuestions('medium');
            }}
          >
            Medium
          </Button>
          <Button
            animation={grow}
            animationDelay="1s"
            secondary
            onClick={() => {
              chooseLevel('hard');
              setQuizQuestions('hard');
            }}
          >
            Hard
          </Button>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <Button secondary onClick={() => chooseType('flags')}>
            Flags
            <StyledIcon>
              <FlagIcon />
            </StyledIcon>
          </Button>
          <Button secondary onClick={() => chooseType('capitals')}>
            Capitals
            <StyledIcon>
              <CapitolIcon />
            </StyledIcon>
          </Button>
        </InnerWrapper>
      )}
    </InnerWrapper>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  chooseType: (quizType) => dispatch(actions.chooseType(quizType)),
  chooseLevel: (level) => dispatch(actions.chooseLevel(level)),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
});

const mapStateToProps = (state) => {
  const { quizType, countries, countriesByLevel, quizLength, bestScore } = state;
  return { quizType, countries, countriesByLevel, quizLength, bestScore };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
