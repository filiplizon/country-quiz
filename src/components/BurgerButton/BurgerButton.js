import React from 'react';
import styled from 'styled-components';

const BurgerButton = ({ open, toggleMenuStateFn }) => (
  <StyledBurger open={open} onClick={toggleMenuStateFn}>
    <span />
    <span />
    <span />
  </StyledBurger>
);

const StyledBurger = styled.button`
  height: 2rem;
  width: 2rem;
  position: absolute;
  right: 3%;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;

  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }

  @media (min-width: 800px) and (orientation: landscape) {
    height: 2.5rem;
    width: 2.5rem;
  }

  @media (min-width: 1024px) {
    height: 4rem;
    width: 4rem;
  }
  @media (min-width: 1200px) {
    display: none;
  }

  span {
    width: 100%;
    height: 2px;
    position: relative;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.black};
    transition: all 0.3s linear;

    @media (min-width: 768px) {
      height: 3px;
    }

    @media (min-width: 1024px) {
      height: 4px;
    }

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default BurgerButton;
