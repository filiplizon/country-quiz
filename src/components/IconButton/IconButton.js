import React from 'react';
import { StyledIconButton } from './IconButton.styles';

const IconButton = ({ onClick, children, alignEnd, className }) => (
  <StyledIconButton alignEnd={alignEnd} onClick={onClick} className={className}>
    {children}
  </StyledIconButton>
);

export default IconButton;
