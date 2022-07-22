import React from 'react';
import Illustration from 'assets/images/no-data.svg';
import { StyledIllustrationWrapper, StyledImage, StyledParagraph } from './NoDataInfo.styles';

const NoDataInfo = () => (
  <StyledIllustrationWrapper>
    <StyledImage src={Illustration} />
    <StyledParagraph>No games played yet.</StyledParagraph>
  </StyledIllustrationWrapper>
);

export default NoDataInfo;
