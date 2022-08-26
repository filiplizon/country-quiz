import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Link from 'components/Link/Link';

export const StyledPopupWrapper = styled.div`
  height: 85vh;
  background-color: hsla(204, 57%, 49%, 1);
  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transform: ${({ isPopupOpen }) => (isPopupOpen ? 'translateY(0)' : 'translateY(120%)')};
  transition: transform 0.5s;
  box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);

  @media (max-height: 600px) and (orientation: landscape) {
    height: 85%;
    left: 35%;
    right: 35%;
    top: unset;
    bottom: 0;
    background-color: hsla(204, 57%, 49%, 0.96);
  }

  @media (min-width: 1100px) {
    height: 85%;
    left: 35%;
    right: 35%;
    top: unset;
    bottom: 0;
    background-color: hsla(204, 57%, 49%, 0.96);
  }
`;

export const StyledPopup = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15%;

  @media (min-width: 768px) {
    height: 50%;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme, color }) => color && theme.primary};
  color: white;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 20px 0;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    padding: 0;
  }
`;

export const StyledCountryName = styled.h2`
  margin: 15px 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 2;
  text-align: center;
  color: #fff;

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 5px 0;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledPararaph = styled(Paragraph)`
  padding: 8px 0;

  & span {
    font-weight: bold;
  }

  @media (max-height: 600px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 5px 0;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100011203;

  &:hover ${Link} {
    transform: translateY(-5px);
  }

  ${Link} {
    @media (max-height: 600px) and (orientation: landscape) {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
