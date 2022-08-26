import React from 'react';
import Link from 'components/Link/Link';
import Flag from 'components/Flag/Flag';
import { StyledWrapper, InnerWrapper, StyledCountryName } from './Card.styles';

const Card = ({ onClick, country, setPopUpVisibilityFn, setCurrentCountryFn, isPopupOpen }) => (
  <StyledWrapper onClick={onClick} key={country.id}>
    <InnerWrapper>
      <Flag flag={country.flag} name={country.name} />
    </InnerWrapper>
    <InnerWrapper color="true">
      <StyledCountryName>{country.name}</StyledCountryName>
    </InnerWrapper>
    <InnerWrapper
      onClick={() => {
        if (isPopupOpen) {
          setCurrentCountryFn(country);
        } else {
          setCurrentCountryFn(country);
          setPopUpVisibilityFn(!isPopupOpen);
        }
      }}
    >
      <Link primary="true" to={`/info/`}>
        Show info
      </Link>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
