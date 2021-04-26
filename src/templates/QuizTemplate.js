import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import bqQuiz from 'assets/images/bgQuiz.png';
import illustration from 'assets/images/illustration.png';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';
import { connect } from 'react-redux';
import actions from 'actions/actions';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
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

const InnerWrapper = styled.div``;

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

  @media (min-width: 768px) {
    height: 60vh;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    height: 47vh;
    width: 32%;
    margin-left: 40px;
  }
`;

const QuizTemplate = ({ children, levelChoosen }) => (
  <StyledWrapper>
    <StyledLink to="/">
      <StyledArrowIcon /> go back
    </StyledLink>
    <InnerWrapper>{children}</InnerWrapper>
    {levelChoosen ? <StyledIllustration className="fade-out" /> : <StyledIllustration />}
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  finishQuiz: () => dispatch(actions.finishQuiz()),
});

export default connect(null, mapDispatchToProps)(QuizTemplate);
