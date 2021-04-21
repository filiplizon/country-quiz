import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, secondary, big }) => (
  <StyledButton big={big} secondary={secondary} onClick={onClick}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  width: 95px;
  height: ${({ big }) => (big ? '70px' : '40px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 0;
  text-align: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
  outline-color: ${({ theme }) => theme.secondary};
  z-index: 2;

  :hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: ${({ secondary }) => secondary && 'scale(1.02)'};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    width: 70px;
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    width: 120px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: ${({ secondary }) => secondary && '10px 0'};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: ${({ secondary }) => secondary && '30px 80px'};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: ${({ secondary }) => secondary && '20px 0'};
  }
`;

export default Button;
