import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 100%;
`;

const StyledWrapper = styled.div`
  height: 15vh;
  cursor: pointer;
  z-index: 10000;
`;

const Logo = ({ src, alt, onClick }) => (
  <StyledWrapper onClick={onClick}>
    <StyledLogo src={src} alt={alt} />
  </StyledWrapper>
);

export default Logo;
