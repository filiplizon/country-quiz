import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, secondary, animation, animationDelay, className, level }) => (
  <StyledButton
    animation={animation}
    animationDelay={animationDelay}
    secondary={secondary}
    onClick={onClick}
    className={className}
    level={level}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  color: white;
  border: none;
  padding: 5px 20px;
  transition: transform 0.2s ease;
  cursor: pointer;
  outline-color: ${({ theme }) => theme.secondary};
  z-index: 2;
  animation: ${({ animation }) => animation} 0.3s both ${({ animationDelay }) => animationDelay};

  :hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &.active {
    background-color: ${({ theme, level }) => (level ? theme.primary : theme.secondary)};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    /* width: 70px; */
    /* padding: 5px 0; */
  }

  @media (min-width: 768px) {
    /* width: 130px; */
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    /* width: 130px; */
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default Button;
