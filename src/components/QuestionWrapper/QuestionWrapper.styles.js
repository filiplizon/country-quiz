import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  height: ${({ quizType }) => (quizType === 'capitals' ? '30vh' : '25vh')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.primary};
`;

export const StyledParagraph = styled(Paragraph)`
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 10px;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
