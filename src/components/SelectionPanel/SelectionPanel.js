import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';

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
                key={el}
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

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-around;
  align-items: center;
  max-width: 400px;

  @media (max-height: 600px) and (orientation: landscape) {
    max-width: 300px;
  }

  @media (min-width: 1600px) {
    max-width: 500px;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledIcon = styled.div`
  margin-left: 5px;

  @media (min-width: 768px) {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledStartButton = styled(Button)`
  margin-top: 20px;
  display: ${({ level }) => (level ? 'block' : 'none')};
`;

const mapDispatchToProps = (dispatch) => ({
  chooseType: (quizType) => dispatch(actions.chooseType(quizType)),
  chooseLevel: (level) => dispatch(actions.chooseLevel(level)),
  setQuizQuestions: (level) => dispatch(actions.setQuizQuestions(level)),
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
  startQuiz: () => dispatch(actions.startQuiz()),
});

const mapStateToProps = (state) => {
  const { quizType, level, levels, user } = state;
  return {
    quizType,
    level,
    levels,
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
