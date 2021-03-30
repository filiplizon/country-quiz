import React from 'react';
import styled from 'styled-components';
// import { slide as Menu } from 'react-burger-menu';

const Navigation = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <button type="button">Capitol</button>
      </li>
      <li>
        <button type="button">Currency</button>
      </li>
      <li>
        <button type="button">Language</button>
      </li>
    </ul>
  </nav>
);

const StyledNavigation = styled(Navigation)`
  width: 100%;
  position: fixed;
  top: 15vh;
  background-color: #f5f5f5;

  @media (min-width: 1200px) {
    position: relative;
    width: 35%;
    top: 0;
    right: -55%;
  }

  ul {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }

  li {
    width: 28%;
    list-style: none;
    font-size: 2rem;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: hsl(204, 57%, 34%);
    transition: color 0.2s;

    @media (min-width: 1200px) {
      width: 25%;
    }
  }

  button {
    width: 100%;
    background-color: transparent;
    color: hsl(204, 57%, 34%);
    border: none;
    border: 1px solid hsl(204, 57%, 34%);
    border-radius: 5px;
    padding: 10px 0;
    text-align: center;
    transition: background-color 0.2s ease;
    cursor: pointer;
    outline-color: hsl(204, 57%, 34%);

    :hover {
      background-color: hsl(204, 57%, 34%);
      color: white;
    }

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
`;

export default StyledNavigation;
