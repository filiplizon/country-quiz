import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from 'components/Card/Card';

class CardWrapper extends Component {
  state = {
    countries: [],
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

  render() {
    const { countries } = this.state;

    return (
      <StyledCardWrapper>
        {countries.length
          ? countries.map((country) => <Card name={country.name} flag={country.flag} />)
          : null}
      </StyledCardWrapper>
    );
  }
}

const StyledCardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 15vh 3% 0;
`;

export default CardWrapper;
