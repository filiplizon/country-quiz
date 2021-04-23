import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';
import { getAllCountries as getAllCountriesAction } from 'operations/operations';

class HomePage extends Component {
  state = {
    filteredCountries: [],
  };

  componentDidMount() {
    const { getAllCountries } = this.props;
    getAllCountries();
  }

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

    return (
      <>
        <Header searchCountryFn={(e) => this.findCountry(e)} />
        <CardWrapper countries={filteredCountries.length ? filteredCountries : countries} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => dispatch(getAllCountriesAction()),
});

const mapStateToProps = (state) => {
  const { countries } = state;
  return { countries };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
