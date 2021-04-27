import React from 'react';
import styled from 'styled-components';

const Input = ({ className, onChange, onKeyPress, placeholder, children, value }) => (
  <StyledWrapper className={className}>
    <StyledInput
      value={value}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
    {children}
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  width: 150px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.primary};

  @media (min-width: 500px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 1200px) {
    width: 250px;
    left: 20%;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }
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

export default Input;
