import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 140px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-height: 500px) and (orientation: portrait) {
    height: 70px;
  }
`;

const StyledFlag = styled.img`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.grey200};
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Flag = ({ flag, name, quiz }) => (
  <StyledWrapper>
    <StyledFlag src={flag} alt={name} />
    {quiz && <StyledParagraph>{name}</StyledParagraph>}
  </StyledWrapper>
);

export default Flag;
