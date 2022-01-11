import React from 'react';
import styled from 'styled-components';

const Input = ({ onChange, placeholder, value, formInput, type, maxLength, className }) => (
  <StyledInput
    value={value}
    placeholder={placeholder}
    type={type || 'text'}
    onChange={onChange}
    formInput={formInput}
    maxLength={maxLength}
    className={className}
  />
);

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  background-color: transparent;
  outline: none;
  padding: 5px;
  border-bottom: ${({ theme }) => `1px solid ${theme.secondary}`};
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    border-bottom: 1px solid ${({ theme, formInput }) => (formInput ? '#fff' : theme.secondary)};
    color: ${({ formInput }) => (formInput ? '#fff' : '#000')};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  &::placeholder {
    color: ${({ theme }) => theme.grey300};

    @media (min-width: 768px) {
      color: ${({ theme, formInput }) => (formInput ? '#d6d6d6' : theme.grey300)};
    }
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.secondary};

    @media (min-width: 768px) {
      border-bottom: 2px solid ${({ theme, formInput }) => (formInput ? '#fff' : theme.secondary)};
    }
  }
`;

export default Input;
