import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';

class HomePage extends Component {
  state = {
    filteredCountries: [],
  };

  findCountry(e) {
    const { countries } = this.props;
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({ filteredCountries });
  }

  render() {
    const { filteredCountries } = this.state;
    const { countries } = this.props;
    const isQuiz = false;

    return (
      <>
        <Header searchCountryFn={(e) => this.findCountry(e)} isQuiz={isQuiz} />
        <CardWrapper countries={filteredCountries.length ? filteredCountries : countries} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps)(HomePage);
