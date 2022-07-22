import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';

export const StyledBestScores = styled.div`
  color: #fff;
  height: 55%;
`;

export const StyledNameWrapper = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
`;

export const StyledName = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid #fff;
`;

export const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: 1.8rem;
  background-color: ${({ theme }) => theme.secondary};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  &.active {
    background-color: ${({ theme }) => theme.primary};
  }

  &:nth-child(1) {
    border-right: 1px solid #fff;
  }
`;

export const StyledScoresWrapper = styled.div`
  background-color: #fff;
  height: 65%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  padding: 15px 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 5px 0;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
