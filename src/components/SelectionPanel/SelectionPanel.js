import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
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
    font-size: 3.5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
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

  @media (min-width: 1100px) {
    width: 85%;
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

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledStartButton = styled(Button)`
  margin-top: 20px;
  display: ${({ level }) => (level ? 'block' : 'none')};
`;

const SelectionPanel = ({
  quizType,
  chooseLevel,
  chooseType,
  setQuizQuestions,
  setCountriesLevel,
  level,
  startQuiz,
  levels,
  user,
  setSidePanelOpen,
}) => {
  const [isActive, setActive] = useState(null);

  return (
    <InnerWrapper column>
      <StyledHeading>
        {Object.keys(user).length > 1 ? `Hi ${user.name}!` : 'Welcome to the quiz!'}
      </StyledHeading>
      <StyledParagraph>Choose {quizType ? 'level' : 'type'} of the quiz:</StyledParagraph>
      {quizType ? (
        <>
          <InnerWrapper>
            {Object.keys(levels).map((el, i) => (
              <Button
                key={i} // eslint-disable-line
                secondary
                level={level}
                onClick={() => {
                  chooseLevel(el);
                  setActive(i);
                }}
                className={isActive === i ? 'active' : null}
              >
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </Button>
            ))}
          </InnerWrapper>
          <StyledStartButton
            level={level}
            secondary
            onClick={() => {
              setCountriesLevel();
              setQuizQuestions(level);
              startQuiz();
              setSidePanelOpen(false);
            }}
          >
            Start
          </StyledStartButton>
        </>
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
  );
};

const mapDispatchToProps = (dispatch) => ({
  chooseType: (quizType) => dispatch(actions.chooseType(quizType)),
  chooseLevel: (level) => dispatch(actions.chooseLevel(level)),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
  startQuiz: () => dispatch(actions.startQuiz()),
  setCurrentQuestion: (question) => dispatch(actions.setCurrentQuestion(question)),
});

const mapStateToProps = (state) => {
  const {
    quizType,
    countries,
    countriesByLevel,
    quizLength,
    bestScore,
    level,
    levels,
    countriesForQuiz,
    counter,
    user,
  } = state;
  return {
    quizType,
    countries,
    countriesByLevel,
    quizLength,
    bestScore,
    level,
    levels,
    countriesForQuiz,
    counter,
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
