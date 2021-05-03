import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Link from 'components/Link/Link';
import bqQuiz from 'assets/images/bgQuiz.png';
import illustration from 'assets/images/illustration.png';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 0.6fr 0.25fr;
  justify-items: center;
  align-content: center;

  @media (min-width: 768px) {
    grid-template-rows: 0.6fr 0.35fr;
  }

  ::after {
    @media (min-width: 1200px) {
      position: absolute;
      right: 0;
      top: 0;
      content: '';
      width: 90vw;
      height: 100vh;
      clip-path: polygon(100% 0, 37% 100%, 100% 100%);
      background-image: url(${bqQuiz});
      background-position: 50% 35%;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    position: absolute;
    top: 20%;
    left: -5%;
  }
`;

const StyledIllustration = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  background-image: url(${illustration});
  background-position: 45% 50%;
  background-size: cover;
  transition: opacity 0.2s;
  z-index: -1;

  &.fade-out {
    opacity: 0.3;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    height: 47vh;
    width: 32%;
    left: 0%;
  }
`;

const QuizTemplate = ({ children, level, quizType, resetLevel, resetType }) => (
  <StyledWrapper>
    {!quizType && (
      <StyledLink to="/">
        <StyledArrowIcon /> home
      </StyledLink>
    )}

    {quizType && level === '' && (
      <StyledLink onClick={() => resetType()} to="/quiz">
        <StyledArrowIcon /> go back
      </StyledLink>
    )}

    {level && (
      <StyledLink onClick={() => resetLevel()} to="/quiz">
        <StyledArrowIcon /> go back
      </StyledLink>
    )}

    <InnerWrapper>{children}</InnerWrapper>
    {level ? <StyledIllustration className="fade-out" /> : <StyledIllustration />}
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  resetLevel: () => dispatch(actions.resetLevel()),
  resetType: () => dispatch(actions.resetType()),
});

const mapStateToProps = (state) => {
  const { level, quizType } = state;
  return { level, quizType };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizTemplate);
