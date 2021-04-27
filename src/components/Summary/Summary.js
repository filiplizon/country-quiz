import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import illustration from 'assets/images/Location.svg';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: ${({ row }) => (row ? '' : '60%')};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1200px) {
    width: ${({ row }) => (row ? '' : '40%')};
  }
`;

const StyledImage = styled.img`
  width: 160px;
  height: 160px;

  @media (min-width: 360px) {
    width: 215px;
    height: 215px;
  }

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1200px) {
    width: 200px;
    height: 200px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;
  line-height: 1.5;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Summary = ({ points, quizLength }) => (
  <StyledWrapper>
    <StyledImage src={illustration} alt="" />
    <StyledParagraph>
      You answered correctly to {points} / {quizLength} questions.
    </StyledParagraph>
    {points >= 5 ? (
      <StyledWrapper row>
        <Button secondary>Quiz menu</Button>
        <Button secondary>Next level</Button>
      </StyledWrapper>
    ) : (
      <StyledWrapper row>
        <Button secondary>Quiz menu</Button>
        <Button secondary>Try again</Button>
      </StyledWrapper>
    )}
  </StyledWrapper>
);

const mapStateToProps = (state) => {
  const { points, quizLength } = state;
  return { points, quizLength };
};

export default connect(mapStateToProps)(Summary);
