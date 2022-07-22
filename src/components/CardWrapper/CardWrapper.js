import React from 'react';
import LazyLoad from 'react-lazy-load';
import Card from 'components/Card/Card';
import { StyledCardWrapper } from './CardWrapper.styles';

const CardWrapper = ({ countries, setCurrentCountryFn, setPopUpVisibilityFn, isPopupOpen }) => (
  <StyledCardWrapper>
    {countries.length
      ? countries.map((country) => (
          <LazyLoad key={country.alpha3Code} offsetVertical={300}>
            <Card
              setCurrentCountryFn={setCurrentCountryFn}
              setPopUpVisibilityFn={setPopUpVisibilityFn}
              country={country}
              isPopupOpen={isPopupOpen}
            />
          </LazyLoad>
        ))
      : null}
  </StyledCardWrapper>
);

export default CardWrapper;
