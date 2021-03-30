import React from 'react';
import styled from 'styled-components';
import { FiSearch as SearchIcon } from 'react-icons/fi';

const Input = ({ className }) => (
  <div className={className}>
    <input placeholder="Find country" type="text" />
    <SearchIcon />
  </div>
);

const StyledInput = styled(Input)`
  width: 180px;
  position: absolute;
  left: 50%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2.5rem;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1024px) {
    width: 350px;
    font-size: 3.5rem;
  }

  @media (min-width: 1200px) {
    width: 250px;
    left: 20%;
    font-size: 2.5rem;
  }

  input {
    width: 85%;
    margin-right: 5px;
    border: none;
    border-bottom: 1px solid #000000;
    font-size: 1.6rem;
    background-color: transparent;

    @media (min-width: 360px) {
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }
`;

export default StyledInput;
