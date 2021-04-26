import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';
import { connect } from 'react-redux';
import actions from 'actions/actions';

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  margin: 85px 0 10px;

  @media (min-width: 768px) {
    margin: 165px 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 65px 0 10px;
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
    width: 70%;
    margin-bottom: 110px;
  }

  @media (min-width: 1200px) {
    width: 60%;
    margin: ${({ column }) => column && '75px 0 0px 150px'};
  }
`;

const StyledIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    height: 90px;
  }
`;

const SelectionPanel = ({
  quizType,
  chooseLevel,
  chooseType,
  setQuizQuestions,
  countriesByLevel,
}) => (
  <InnerWrapper column>
    <StyledHeading>Welcome to the quiz!</StyledHeading>
    <StyledParagraph>Choose {quizType ? 'level' : 'type'} of the quiz:</StyledParagraph>
    {quizType ? (
      <InnerWrapper>
        <Button
          secondary
          onClick={() => {
            chooseLevel('easy');
            setQuizQuestions(countriesByLevel, 'easy');
          }}
        >
          Easy
        </Button>
        <Button
          secondary
          onClick={() => {
            chooseLevel('medium');
            setQuizQuestions(countriesByLevel, 'medium');
          }}
        >
          Medium
        </Button>
        <Button
          secondary
          onClick={() => {
            chooseLevel('hard');
            setQuizQuestions(countriesByLevel, 'hard');
          }}
        >
          Hard
        </Button>
      </InnerWrapper>
    ) : (
      <InnerWrapper>
        <Button secondary big onClick={() => chooseType('flags')}>
          <StyledIcon>
            <FlagIcon />
          </StyledIcon>
          Flags
        </Button>
        <Button secondary big onClick={() => chooseType('capitals')}>
          <StyledIcon>
            <CapitolIcon />
          </StyledIcon>
          Capitals
        </Button>
      </InnerWrapper>
    )}
  </InnerWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  chooseType: (quizType) => dispatch(actions.chooseType(quizType)),
  chooseLevel: (level) => dispatch(actions.chooseLevel(level)),
  setQuizQuestions: (countries, level) => dispatch(actions.setQuizQuestions(countries, level)),
});

const mapStateToProps = (state) => {
  const { quizType, countries, countriesByLevel } = state;
  return { quizType, countries, countriesByLevel };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
