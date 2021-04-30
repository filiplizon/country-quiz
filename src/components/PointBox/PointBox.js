import React from 'react';
import styled from 'styled-components';
import { grow } from 'helpers/animations';

const StyledPointBox = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  animation: ${grow} 0.2s linear both;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    top: 5%;
    right: 20%;
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: #fff;
    z-index: 1000;
  }
`;

const PointBox = ({ children }) => <StyledPointBox>{children}</StyledPointBox>;

export default PointBox;
