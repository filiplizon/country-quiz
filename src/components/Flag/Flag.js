import React from 'react';
import { StyledWrapper, StyledFlag, StyledParagraph } from './Flag.styles';

const Flag = ({ flag, name, quiz, noBorder, className }) => (
  <StyledWrapper className={className}>
    <StyledFlag noBorder={noBorder} src={flag} alt={name} />
    {quiz && <StyledParagraph>{name}</StyledParagraph>}
  </StyledWrapper>
);

export default Flag;
