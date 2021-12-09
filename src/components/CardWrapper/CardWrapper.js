import React, { useState } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Card from 'components/Card/Card';
import InfoPopup from 'components/InfoPopup/InfoPopup';

const StyledCardWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 0;
  padding: 15vh 3% 0;

  @media (min-width: 500px) and (orientation: landscape) {
    padding: 17vh 3% 0;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

const CardWrapper = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState('');
  const [isPopupOpen, setPopUpVisibility] = useState(false);

  return (
    <>
      <InfoPopup
        currentCountry={currentCountry}
        isPopupOpen={isPopupOpen}
        stateChanger={setPopUpVisibility}
      />

      <StyledCardWrapper>
        {countries.length
          ? countries.map((country) => (
              <LazyLoad key={country.alpha3Code} offsetVertical={300}>
                <Card
                  setCurrentCountryFn={setCurrentCountry}
                  setPopUpVisibilityFn={setPopUpVisibility}
                  country={country}
                  isPopupOpen={isPopupOpen}
                />
              </LazyLoad>
            ))
          : null}
      </StyledCardWrapper>
    </>
  );
};

export default CardWrapper;
