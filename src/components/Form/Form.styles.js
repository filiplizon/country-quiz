import styled from 'styled-components';
import Link from 'components/Link/Link';
import Input from 'components/Input/Input';
import Paragraph from 'components/Paragraph/Paragraph';

export const StyledWrapper = styled.form`
  margin-top: 60vh;
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 30px 0;
    height: calc(100% - 20%);
  }
`;

export const StyledInputWrapper = styled.div`
  width: 70%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const StyledInput = styled(Input)`
  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledParagraph = styled(Paragraph)`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xs} ${Link} {
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    color: ${({ color }) => (color ? '#ff444f' : '#e0e0e0')};

    ${Link} {
      font-size: 1.3rem;
      color: #fff;
    }
  }

  @media (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

export const StyledError = styled(Paragraph)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  font-weight: bold;
  display: ${({ errorText }) => (errorText ? 'block' : 'none')};
`;

export const StyledLinkContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &:hover {
    ${Link} {
      transform: translateY(-5px);
    }
  }

  @media (min-width: 768px) {
    background-color: #fff;
    height: 20%;

    ${Link} {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primary};
    }
  }
`;
