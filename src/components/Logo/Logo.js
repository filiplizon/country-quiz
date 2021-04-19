import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 100%;
`;

const Logo = ({ src, alt }) => <StyledLogo src={src} alt={alt} />;

export default Logo;
