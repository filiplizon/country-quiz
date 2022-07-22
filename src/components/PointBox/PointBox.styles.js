import styled from 'styled-components';

export const StyledPointBox = styled.div`
  position: fixed;
  top: 20%;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    top: 20%;
    right: 10%;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: #fff;
    z-index: 1000;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
