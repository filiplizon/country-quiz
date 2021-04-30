import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, secondary, animation, animationDelay }) => (
  <StyledButton
    animation={animation}
    animationDelay={animationDelay}
    secondary={secondary}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 0;
  transition: transform 0.2s ease;
  cursor: pointer;
  outline-color: ${({ theme }) => theme.secondary};
  z-index: 2;
  animation: ${({ animation }) => animation} 0.3s both ${({ animationDelay }) => animationDelay};

  :hover {
    transform: scale(1.05);
  }

  @media (min-width: 500px) and (orientation: landscape) {
    width: 70px;
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    width: 130px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1024px) {
    width: 180px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1200px) {
    width: 130px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default Button;
