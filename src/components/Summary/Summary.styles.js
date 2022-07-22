import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  width: 90%;
  height: ${({ row }) => (row ? '' : '50%')};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;
  margin-top: ${({ row }) => (row ? '10px' : '0')};

  @media (min-width: 768px) {
    width: ${({ row }) => (row ? '55%' : '90%')};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: ${({ row }) => (row ? '70%' : '90%')};
  }

  @media (min-width: 1100px) {
    width: ${({ row }) => (row ? '' : '100%')};
    margin-top: ${({ row }) => (row ? '10px' : '50px')};
  }
`;

export const StyledImage = styled.img`
  height: 160px;

  @media (min-width: 360px) {
    height: 215px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 100px;
  }

  @media (min-width: 1100px) {
    height: 200px;
  }

  @media (min-width: 1600px) {
    height: 300px;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5px;
  width: 90%;
  text-align: center;

  @media (min-width: 360px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
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
`;
