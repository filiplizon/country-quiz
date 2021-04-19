import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';

class HomePageTemplate extends Component {
  state = {
    menuOpen: false,
    countries: [],
    filteredCountries: [],
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')

      .then((response) => {
        this.setState({ countries: [...response.data] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchCountry(e) {
    const { countries } = this.state;
    const filteredCountriesArray = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState(() => ({ filteredCountries: filteredCountriesArray }));
  }

  toggleMenuState() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    const { menuOpen, countries, filteredCountries } = this.state;

    return (
      <div>
        <Header
          className="header"
          toggleMenuStateFn={() => this.toggleMenuState()}
          menuOpen={menuOpen}
          searchCountryFn={(e) => this.searchCountry(e)}
        />
        <CardWrapper countries={filteredCountries.length ? filteredCountries : countries} />
      </div>
    );
  }
}

export default HomePageTemplate;
