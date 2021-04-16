import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Flag from 'components/Flag/Flag';

const StyledWrapper = styled.div`
  min-height: 55vh;
  width: 95vw;
  display: grid;
  grid-template-rows: 0.7fr 0.15fr 0.25fr;
  justify-items: center;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, theme }) => (color ? theme.primary : null)};
  color: white;
`;

const StyledCountryName = styled.h2`
  margin: 15px 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2;
  text-align: center;
`;

const StyledPararaph = styled.p`
  display: ${({ hiddenInfo }) => (hiddenInfo ? 'none' : 'block')};
  margin: 0 0 10px;

  :last-child {
    padding-bottom: 25px;
  }
`;

class Card extends Component {
  state = {
    hiddenInfo: true,
  };

  toggleInfoVisibility() {
    this.setState((state) => ({ hiddenInfo: !state.hiddenInfo }));
  }

  render() {
    const {
      name,
      flag,
      capital,
      currency,
      language,
      population,
      region,
      subregion,
      timezone,
    } = this.props;

    const { hiddenInfo } = this.state;

    return (
      <StyledWrapper>
        <InnerWrapper>
          <Flag flag={flag} name={name} />
        </InnerWrapper>
        <InnerWrapper color="true">
          <StyledCountryName>{name}</StyledCountryName>
          <InnerWrapper>
            <StyledPararaph hiddenInfo={hiddenInfo}>Capital: {capital}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Currency: {currency}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Language: {language}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Population: {population}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Region: {region}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Subregion: {subregion}</StyledPararaph>
            <StyledPararaph hiddenInfo={hiddenInfo}>Timezone: {timezone}</StyledPararaph>
          </InnerWrapper>
        </InnerWrapper>
        <InnerWrapper>
          <Button
            toggleInfoVisibilityFn={() => this.toggleInfoVisibility()}
            hiddenInfo={hiddenInfo}
          >
            {hiddenInfo ? 'Show info' : 'Hide info'}
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

export default Card;
