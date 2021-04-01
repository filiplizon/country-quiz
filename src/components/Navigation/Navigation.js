import React from 'react';
import styled from 'styled-components';

const Navigation = ({ className, open }) => (
  <nav className={className} open={open}>
    <ul>
      <li>
        <button className="active" type="button">
          Capitol
        </button>
      </li>
      <li>
        <button type="button">Currency</button>
      </li>
      <li>
        <button className="active" type="button">
          Language
        </button>
      </li>
    </ul>
  </nav>
);

const StyledNavigation = styled(Navigation)`
  width: 100%;
  position: fixed;
  top: 15vh;
  background-color: #f5f5f5;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1200px) {
    position: relative;
    width: 35%;
    top: 0;
    right: -55%;
    transform: translateX(0);
  }

  ul {
    display: flex;
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
    background-color: hsl(204, 57%, 34%);
    color: white;
    border: none;
    border: 1px solid hsl(204, 57%, 34%);
    border-radius: 5px;
    padding: 10px 0;
    text-align: center;
    transition: background-color 0.2s ease;
    cursor: pointer;
    outline-color: hsl(204, 57%, 49%);

    :hover {
      background-color: hsl(204, 57%, 49%);
    }

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
`;

export default StyledNavigation;
