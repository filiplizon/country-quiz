import React from 'react';
import { StyledInput } from './Input.styles';

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

export default Input;
