import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Link from 'components/Link/Link';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import SidePanel from 'components/SidePanel/SidePanel';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import Summary from 'components/Summary/Summary';
import map from 'assets/images/world2.svg';
import illustration from 'assets/images/illustration.png';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';

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

      <InnerWrapper start={start} counter={counter}>
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
      </InnerWrapper>
      <StyledMap src={map} start={start} counter={counter} />
      <StyledIllustration start={start} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-content: center;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 3vw;
  color: ${({ theme }) => theme.primary};
  z-index: 1000;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ start, counter }) => (start ? '0' : `${counter === 10 ? '5vh' : '20vh'}`)};
  z-index: 1;
  height: ${({ start }) => (start ? '100vh' : '85vh')};

  @media (max-height: 600px) and (orientation: landscape) {
    position: absolute;
    top: ${({ start }) => (start ? '-5%' : '0')};
    left: 15%;
    width: 35%;
    height: 80%;
  }

  @media (min-width: 1100px) {
    position: absolute;
    top: ${({ start }) => (start ? '-5%' : '0')};
    left: 16%;
    width: 35%;
    height: 80%;
  }
`;

const StyledIllustration = styled.div`
  width: 220px;
  height: 220px;
  position: absolute;
  bottom: -10px;
  background-image: url(${illustration});
  background-position: 45% 50%;
  background-size: cover;
  display: ${({ start }) => (start ? 'none' : 'block')};

  @media (min-width: 768px) {
    width: 32%;
    height: 25%;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 47vh;
    width: 32%;
    left: 0%;
    display: block;
  }

  @media (min-width: 1100px) {
    height: 47vh;
    width: 32%;
    left: 0%;
    display: block;
  }
`;

const StyledMap = styled.img`
  display: ${({ start, counter }) => (start || counter === 10 ? 'none' : 'block')};
  position: absolute;
  top: 22vh;
  z-index: 100;
  margin-right: 10px;
  max-width: 90%;
  max-height: 35%;

  @media (min-width: 768px) {
    height: 33%;
    max-width: 500px;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: 50%;
    bottom: 0;
    top: unset;
    right: 0;
    z-index: -1;
    display: block;
    max-width: unset;
    max-height: unset;
    height: unset;
  }

  @media (min-width: 1100px) {
    width: 50%;
    bottom: 0;
    top: unset;
    right: 0;
    z-index: -1;
    display: block;
    max-width: unset;
    height: unset;
    max-height: unset;
  }
`;

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
