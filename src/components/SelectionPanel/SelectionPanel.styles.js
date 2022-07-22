import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';

export const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  justify-content: space-around;
  align-items: center;
  max-width: 400px;

  @media (max-height: 600px) and (orientation: landscape) {
    max-width: 300px;
  }

  @media (min-width: 1600px) {
    max-width: 500px;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledIcon = styled.div`
  margin-left: 5px;

  @media (min-width: 768px) {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledStartButton = styled(Button)`
  margin-top: 20px;
  display: ${({ level }) => (level ? 'block' : 'none')};
`;
