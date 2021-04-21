import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 100%;
`;

const StyledWrapper = styled.div`
  height: 15vh;
`;

const Logo = ({ src, alt }) => (
  <StyledWrapper>
    <StyledLogo src={src} alt={alt} />
  </StyledWrapper>
);

export default Logo;
