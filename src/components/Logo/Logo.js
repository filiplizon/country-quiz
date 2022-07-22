import React from 'react';
import { StyledWrapper, StyledLogo } from './Logo.styles';

const Logo = ({ src, alt, onClick }) => (
  <StyledWrapper onClick={onClick}>
    <StyledLogo src={src} alt={alt} />
  </StyledWrapper>
);

export default Logo;
