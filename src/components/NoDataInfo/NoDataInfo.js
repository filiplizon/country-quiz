import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Illustration from 'assets/images/no-data.svg';

const NoDataInfo = () => (
  <StyledIllustrationWrapper>
    <StyledImage src={Illustration} />
    <StyledParagraph>No games played yet.</StyledParagraph>
  </StyledIllustrationWrapper>
);

const StyledIllustrationWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

const StyledImage = styled.img`
  width: 35%;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: 700;
  padding: 10px;
  color: #383838;
`;

export default NoDataInfo;
