import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Button from 'components/Button/Button';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';
import {
  StyledInnerWrapper,
  StyledHeading,
  StyledIcon,
  StyledParagraph,
  StyledStartButton,
} from './SelectionPanel.styles';

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
    <StyledInnerWrapper column>
      <StyledHeading>
        {Object.keys(user).length > 1 ? `Hi ${user.name}!` : 'Welcome to the quiz!'}
      </StyledHeading>
      <StyledParagraph>Choose {quizType ? 'level' : 'type'} of the quiz:</StyledParagraph>
      {quizType ? (
        <>
          <StyledInnerWrapper>
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
          </StyledInnerWrapper>
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
        <StyledInnerWrapper>
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
        </StyledInnerWrapper>
      )}
    </StyledInnerWrapper>
  );
};

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
