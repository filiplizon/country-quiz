import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Link from 'components/Link/Link';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import illustration from 'assets/images/illustration.png';
import map from 'assets/images/world2.svg';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';
// import AnswerBox from 'components/AnswerBox/AnswerBox';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  align-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 3vw;
  color: ${({ theme }) => theme.primary};
  z-index: 1000;
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
  top: ${({ start }) => (start ? '0' : '20vh')};
  z-index: 1;
  height: ${({ start }) => (start ? '100vh' : '85vh')};

  @media (min-width: 1100px) {
    position: absolute;
    top: ${({ start }) => (start ? '-5%' : '0')};
    left: 18%;
    width: 35%;
    height: 80%;
  }
`;

const StyledIllustration = styled.div`
  width: 50%;
  height: 20%;
  position: absolute;
  bottom: -10px;
  background-image: url(${illustration});
  background-position: 45% 50%;
  background-size: cover;
  opacity: ${({ start }) => (start ? '0.3' : '1')};
  transition: opacity 0.2s;
  display: ${({ start }) => (start ? 'none' : 'block')};

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 55%;
  }

  @media (min-width: 1100px) {
    height: 47vh;
    width: 32%;
    left: 0%;
    display: block;
  }
`;

const StyledMap = styled.img`
  display: ${({ start }) => (start ? 'none' : 'block')};
  position: absolute;
  top: 20vh;
  z-index: 100;

  @media (min-width: 760px) {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 50%;
    bottom: 0;
    top: unset;
    right: 0;
    z-index: -1;
    display: block;
  }
`;

const QuizTemplate = ({
  quizType,
  resetLevel,
  resetType,
  children,
  level,
  formType,
  start,
  isUserLoggedIn,
  // countriesForQuiz,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <StyledWrapper>
      {/* {!quizType && (
      <StyledLink to="/">
        <StyledArrowIcon /> home
      </StyledLink>
    )} */}

      {quizType && level === '' && (
        <StyledLink onClick={() => resetType()} to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
      )}

      {level && (
        <StyledLink onClick={() => resetLevel()} to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
      )}
      <Modal
        isUserLoggedIn={isUserLoggedIn}
        isModalOpen={isModalOpen}
        setModalOpenFn={setModalOpen}
        formType={formType}
      />
      <Header isQuiz="true" setModalOpenFn={setModalOpen} />
      <StyledMap src={map} start={start} />
      <InnerWrapper start={start}>{children}</InnerWrapper>
      <StyledIllustration start={start} />
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  resetLevel: () => dispatch(actions.resetLevel()),
  resetType: () => dispatch(actions.resetType()),
  startQuiz: () => dispatch(actions.startQuiz()),
});

const mapStateToProps = (state) => {
  const { level, quizType, formType, start, isUserLoggedIn } = state;
  return { level, quizType, formType, start, isUserLoggedIn };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizTemplate);
