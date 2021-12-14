import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';

const UserInfo = () => (
  <StyledUserInfo>
    <StyledName>Name</StyledName>
    <StyledParagraph>Signed in: </StyledParagraph>
    <StyledParagraph>Games played: </StyledParagraph>
    <StyledParagraph>Average score: </StyledParagraph>
  </StyledUserInfo>
);

const StyledUserInfo = styled.div`
  color: #fff;
  margin: 30px 0 30px 20px;
`;

const StyledName = styled(Heading)`
  margin-bottom: 20px;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 10px;
`;

export default UserInfo;
