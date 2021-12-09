import React from 'react';
import styled from 'styled-components';

const Input = ({ onChange, onKeyPress, placeholder, value, formInput, type }) => (
  <StyledInput
    value={value}
    placeholder={placeholder}
    type={type || 'text'}
    onChange={onChange}
    onKeyPress={onKeyPress}
    formInput={formInput}
  />
);

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};

  &::placeholder {
    color: ${({ theme }) => theme.grey300};

    @media (min-width: 1100px) {
      color: ${({ theme, formInput }) => (formInput ? '#d6d6d6' : theme.grey300)};
    }
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.secondary};

    @media (min-width: 1100px) {
      border-bottom: 2px solid ${({ theme, formInput }) => (formInput ? '#fff' : theme.secondary)};
    }
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

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    border-bottom: 1px solid ${({ theme, formInput }) => (formInput ? '#fff' : theme.secondary)};
    color: ${({ theme, formInput }) => (formInput ? '#fff' : theme.black)};
  }
`;

export default Input;
