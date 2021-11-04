import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
import Card from 'components/Card/Card';

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

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

const CardWrapper = ({ countries }) => (
  <StyledCardWrapper>
    {countries.length
      ? countries.map((country) => (
          <LazyLoad key={country.alpha3Code} offsetVertical={300}>
            <Card
              id={country.alpha3Code}
              name={country.name}
              flag={country.flag}
              capital={country.capital ? country.capital : '-'}
              currency={country.currencies ? country.currencies[0].name : '-'}
              language={country.languages[0].name}
              population={country.population.toLocaleString()}
              region={country.region}
              subregion={country.subregion}
              timezone={country.timezones[0]}
            />
          </LazyLoad>
        ))
      : null}
  </StyledCardWrapper>
);

export default CardWrapper;
