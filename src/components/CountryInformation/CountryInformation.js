import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import InfoPopup from 'components/InfoPopup/InfoPopup';
import { BsArrowUp as ArrowIcon } from 'react-icons/bs';
import { StyledIconButton } from './CountryInformation.styles';

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
        <StyledIconButton onClick={scrollToTop}>
          <ArrowIcon />
        </StyledIconButton>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(CountryInformation);
