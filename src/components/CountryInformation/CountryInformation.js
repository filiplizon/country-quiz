import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import InfoPopup from 'components/InfoPopup/InfoPopup';
import IconButton from 'components/IconButton/IconButton';
import { BsArrowUp as ArrowIcon } from 'react-icons/bs';

const CountryInformation = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState('');
  const [isPopupOpen, setPopUpVisibility] = useState(false);
  const isQuiz = false;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const findCountry = (e) => {
    const allFilteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredCountries(allFilteredCountries);
  };

  return (
    <>
      <Header
        searchCountryFn={(e) => findCountry(e)}
        isQuiz={isQuiz}
        setPopUpVisibilityFn={setPopUpVisibility}
      />
      <CardWrapper
        isPopupOpen={isPopupOpen}
        setPopUpVisibilityFn={setPopUpVisibility}
        setCurrentCountryFn={setCurrentCountry}
        countries={filteredCountries.length ? filteredCountries : countries}
      />
      <InfoPopup
        currentCountry={currentCountry}
        isPopupOpen={isPopupOpen}
        setPopUpVisibilityFn={setPopUpVisibility}
      />
      {!isPopupOpen && (
        <StyledIconButton isVisible onClick={scrollToTop}>
          <ArrowIcon />
        </StyledIconButton>
      )}
    </>
  );
};

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 3vh;
  right: 3vw;
`;

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(CountryInformation);
