import React from 'react';
import Flag from 'components/Flag/Flag';
import Link from 'components/Link/Link';
import {
  StyledPopupWrapper,
  StyledButtonWrapper,
  StyledCountryName,
  StyledPararaph,
  StyledPopup,
  StyledInnerWrapper,
} from './InfoPopup.styles';

const InfoPopup = ({ currentCountry, isPopupOpen, setPopUpVisibilityFn }) => (
  <StyledPopupWrapper isPopupOpen={isPopupOpen}>
    <StyledPopup>
      <StyledInnerWrapper>
        <Flag noBorder flag={currentCountry.flag} name={currentCountry.name} />
      </StyledInnerWrapper>
      <StyledCountryName>{currentCountry.name}</StyledCountryName>
      <StyledInnerWrapper color="true">
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
      </StyledInnerWrapper>
    </StyledPopup>
    <StyledButtonWrapper
      onClick={() => {
        setPopUpVisibilityFn(!isPopupOpen);
      }}
    >
      <Link primary="true" to="/info">
        Close
      </Link>
    </StyledButtonWrapper>
  </StyledPopupWrapper>
);

export default InfoPopup;
