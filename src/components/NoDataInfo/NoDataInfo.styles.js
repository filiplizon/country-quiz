import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

export const StyledIllustrationWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

export const StyledImage = styled.img`
  width: 35%;
`;

export const StyledParagraph = styled(Paragraph)`
  font-weight: 700;
  padding: 10px;
  color: #383838;
`;
