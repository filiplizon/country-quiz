import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';

const BestScores = () => (
  <StyledBestScores>
    <StyledName>Best score</StyledName>
    <StyledButtonContainer>
      <StyledButton>Flags</StyledButton>
      <StyledButton>Capitals</StyledButton>
    </StyledButtonContainer>
    <StyledScoresWrapper>
      <StyledParagraph>Easy: </StyledParagraph>
      <StyledParagraph>Medium: </StyledParagraph>
      <StyledParagraph>Hard: </StyledParagraph>
    </StyledScoresWrapper>
  </StyledBestScores>
);

const StyledBestScores = styled.div`
  color: #fff;
  margin: 30px 0 0;
`;

const StyledName = styled(Heading)`
  background-color: #fff;
  width: 100%;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  padding: 20px 0;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #fff;
`;

const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.secondary};

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  &:nth-child(1) {
    border-right: 1px solid #fff;
  }
`;

const StyledScoresWrapper = styled.div`
  background-color: #fff;
  height: calc(75vh - 309px);
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1100px) {
    height: calc(75vh - 280px);
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  padding: 20px 0;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 10px 0;
  }
`;

export default BestScores;
