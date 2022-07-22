import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import SidePanel from 'components/SidePanel/SidePanel';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import Summary from 'components/Summary/Summary';
import map from 'assets/images/world2.svg';
import {
  StyledWrapper,
  StyledArrowIcon,
  StyledIllustration,
  StyledLink,
  StyledMap,
  StyledInnerWrapper,
} from './Quiz.styles';

const Quiz = ({
  quizType,
  resetLevel,
  resetType,
  resetFrom,
  level,
  formType,
  start,
  setPlayerToDisplay,
  user,
  counter,
  countriesForQuiz,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [panelType, setPanelType] = useState(null);
  return (
    <StyledWrapper>
      {quizType && level === '' && !isModalOpen && (
        <StyledLink onClick={() => resetType()} to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
      )}
      {level && !isModalOpen && (
        <StyledLink onClick={() => resetLevel()} to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
      )}
      <Modal isModalOpen={isModalOpen} setModalOpenFn={setModalOpen} formType={formType} />
      <SidePanel
        isSidePanelOpen={!start && isSidePanelOpen}
        setSidePanelOpenFn={setSidePanelOpen}
        panelType={panelType}
        setPanelTypeFn={setPanelType}
        setPlayerToDisplayFn={setPlayerToDisplay}
        user={user}
      />
      <Header
        isQuiz="true"
        setPanelTypeFn={setPanelType}
        setSidePanelOpenFn={setSidePanelOpen}
        isSidePanelOpen={isSidePanelOpen}
        isModalOpen={isModalOpen}
        setModalOpenFn={setModalOpen}
        start={start}
        counter={counter}
        resetLevel={resetLevel}
        resetType={resetType}
        resetFrom={resetFrom}
      />

      <StyledInnerWrapper start={start} counter={counter}>
        {counter === 10 ? (
          <Summary setSidePanelOpen={setSidePanelOpen} />
        ) : (
          <>
            {countriesForQuiz.length ? (
              <QuestionWrapper />
            ) : (
              <SelectionPanel setSidePanelOpen={setSidePanelOpen} />
            )}
          </>
        )}
      </StyledInnerWrapper>
      <StyledMap src={map} start={start} counter={counter} />
      <StyledIllustration start={start} />
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetLevel: () => dispatch(actions.resetLevel()),
  resetType: () => dispatch(actions.resetType()),
  resetFrom: () => dispatch(actions.resetFrom()),
  startQuiz: () => dispatch(actions.startQuiz()),
  setPlayerToDisplay: (playerToDisplay) => dispatch(actions.setPlayerToDisplay(playerToDisplay)),
});

const mapStateToProps = (state) => {
  const { level, quizType, formType, start, user, counter, countriesForQuiz } = state;
  return { level, quizType, formType, start, user, counter, countriesForQuiz };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
