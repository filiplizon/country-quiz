import React from 'react';
import styled from 'styled-components';

const IconButton = ({ onClick, children, isVisible, alignEnd, className }) => (
  <StyledIconButton
    alignEnd={alignEnd}
    onClick={onClick}
    isVisible={isVisible}
    className={className}
  >
    {children}
  </StyledIconButton>
);

const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  align-items: center;
  justify-content: center;
  align-self: ${({ alignEnd }) => (alignEnd ? 'end' : 'center')};
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  z-index: 1000;

  /* @media (min-width: 1100px) {
    display: none;
  } */
`;

export default IconButton;
