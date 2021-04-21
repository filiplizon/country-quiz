import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import bqQuiz from 'assets/images/bgQuiz.png';
import illustration from 'assets/images/illustration.png';
import { VscArrowLeft as ArrowIcon } from 'react-icons/vsc';
import { FaFlagUsa as FlagIcon } from 'react-icons/fa';
import { GiCapitol as CapitolIcon } from 'react-icons/gi';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

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
  position: absolute;
  top: 20px;
  left: 20px;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

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

const StyledIllustration = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  background-image: url(${illustration});
  background-position: 45% 50%;
  background-size: cover;

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

const StyledIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    height: 90px;
  }
`;
class Quiz extends Component {
  state = {
    typeChosen: false,
    quizType: '',
  };

  handleTypeChange(quizType) {
    this.setState((state) => ({ typeChosen: !state.typeChosen }));
    this.state.quizType = quizType;
  }

  render() {
    return (
      <StyledWrapper>
        <StyledLink to="/">
          <StyledArrowIcon /> go back
        </StyledLink>
        <InnerWrapper column>
          <StyledHeading>Welcome to the quiz!</StyledHeading>
          <StyledParagraph>Choose type of the quiz:</StyledParagraph>
          <InnerWrapper>
            <Button secondary onClick={() => this.handleTypeChange('flags')}>
              <StyledIcon>
                <FlagIcon />
              </StyledIcon>
              Flags
            </Button>
            <Button secondary onClick={() => this.handleTypeChange('capitals')}>
              <StyledIcon>
                <CapitolIcon />
              </StyledIcon>
              Capitals
            </Button>
          </InnerWrapper>
        </InnerWrapper>
        <StyledIllustration />
      </StyledWrapper>
    );
  }
}

export default Quiz;
