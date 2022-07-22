import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 14vh;
  cursor: pointer;
  z-index: 10000;

  @media (max-height: 600px) and (orientation: landscape) {
    height: 20vh;
  }

  @media (min-width: 1100px) {
    height: 15vh;
  }
`;

export const StyledLogo = styled.img`
  height: 100%;
`;
