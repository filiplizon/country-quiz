import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

const Flag = ({ flag, name, quiz, noBorder, className }) => (
  <StyledWrapper className={className}>
    <StyledFlag noBorder={noBorder} src={flag} alt={name} />
    {quiz && <StyledParagraph>{name}</StyledParagraph>}
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  width: 140px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-height: 600px) and (orientation: landscape) {
    height: 50px;
    width: auto;
  }
`;

const StyledFlag = styled.img`
  height: 100%;
  border: 1px solid ${({ theme, noBorder }) => (noBorder ? 'none' : `${theme.grey200}`)};
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-top: 5px;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default Flag;
