import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, className, level }) => (
  <StyledButton onClick={onClick} className={className} level={level}>
    {children}
  </StyledButton>
);

export default Button;
