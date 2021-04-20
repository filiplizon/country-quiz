import React from 'react';
import styled from 'styled-components';
import { FiSearch as SearchIcon } from 'react-icons/fi';

const Input = ({ className, onChange }) => (
  <StyledWrapper className={className}>
    <StyledInput placeholder="Find country" type="text" onChange={onChange} />
    <SearchIcon />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  width: 150px;
  position: absolute;
  left: 50%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.l};
  transform: translateX(-50%);

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

  @media (min-width: 1200px) and (orientation: landscape) {
    margin-left: 80px;
  }
`;

const StyledInput = styled.input`
  width: 85%;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid #000000;
  font-size: 1.6rem;
  background-color: transparent;

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
`;

export default Input;
