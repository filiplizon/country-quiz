import React from 'react';
import styled from 'styled-components';

const StyledPointBox = styled.div`
  position: fixed;
  top: 20%;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1100px) {
    top: 20%;
    right: 10%;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: #fff;
    z-index: 1000;
  }
`;

const PointBox = ({ children }) => <StyledPointBox>{children}</StyledPointBox>;

export default PointBox;
