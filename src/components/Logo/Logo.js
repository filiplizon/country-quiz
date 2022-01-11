import React from 'react';
import styled from 'styled-components';

const Logo = ({ src, alt, onClick }) => (
  <StyledWrapper onClick={onClick}>
    <StyledLogo src={src} alt={alt} />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
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

const StyledLogo = styled.img`
  height: 100%;
`;

export default Logo;
