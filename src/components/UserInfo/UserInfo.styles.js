import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Link from 'components/Link/Link';

export const StyledUserInfo = styled.div`
  height: 35%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

export const StyledName = styled(Heading)`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 5px;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 5px;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  & span {
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  align-self: center;
  overflow: hidden;
  font-weight: 400;

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

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: translateX(-100%);
    transition: 0.2s transform;
  }

  &:hover {
    transform: translateY(0);

    &::after {
      transform: translateX(0);
    }
  }
`;
