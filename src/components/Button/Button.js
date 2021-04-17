import React from 'react';
import styled from 'styled-components';

const Button = ({ children, toggleInfoVisibilityFn }) => (
  <StyledButton onClick={toggleInfoVisibilityFn}>{children}</StyledButton>
);

const StyledButton = styled.button`
  width: 95px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  text-align: center;
  transition: background-color 0.2s ease;
  cursor: pointer;
  outline-color: ${({ theme }) => theme.secondary};

  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 500px) and (orientation: landscape) {
    width: 70px;
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    width: 120px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default Button;
