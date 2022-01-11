import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Flag from 'components/Flag/Flag';
import Link from 'components/Link/Link';

const InfoPopup = ({ currentCountry, isPopupOpen, setPopUpVisibilityFn }) => (
  <StyledPopupWrapper isPopupOpen={isPopupOpen}>
    <StyledPopup>
      <InnerWrapper>
        <Flag noBorder flag={currentCountry.flag} name={currentCountry.name} />
      </InnerWrapper>
      <StyledCountryName>{currentCountry.name}</StyledCountryName>
      <InnerWrapper color="true">
        <StyledPararaph>
          Capital: <span>{currentCountry.capital ? currentCountry.capital : '-'}</span>
        </StyledPararaph>
        <StyledPararaph>
          Currency:{' '}
          <span>{currentCountry.currencies ? currentCountry.currencies[0].name : '-'}</span>
        </StyledPararaph>
        <StyledPararaph>
          Language: <span>{currentCountry.languages ? currentCountry.languages[0].name : '-'}</span>
        </StyledPararaph>
        <StyledPararaph>
          Population:{' '}
          <span>{currentCountry.population ? currentCountry.population.toLocaleString() : ''}</span>
        </StyledPararaph>
        <StyledPararaph>
          Region: <span>{currentCountry.region}</span>
        </StyledPararaph>
        <StyledPararaph>
          Subregion: <span>{currentCountry.subregion}</span>
        </StyledPararaph>
        <StyledPararaph>
          Timezone: <span>{currentCountry.timezones ? currentCountry.timezones[0] : ''}</span>
        </StyledPararaph>
      </InnerWrapper>
    </StyledPopup>
    <StyledButtonWrapper
      onClick={() => {
        setPopUpVisibilityFn(!isPopupOpen);
        document.body.style.overflow = 'unset';
      }}
    >
      <Link primary="true" to="/info">
        Close
      </Link>
    </StyledButtonWrapper>
  </StyledPopupWrapper>
);

const StyledPopupWrapper = styled.div`
  height: 85vh;
  background-color: hsla(204, 57%, 49%, 0.98);
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

const StyledPopup = styled.div`
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

const InnerWrapper = styled.div`
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

const StyledCountryName = styled.h2`
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

const StyledPararaph = styled(Paragraph)`
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

const StyledButtonWrapper = styled.div`
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

export default InfoPopup;
