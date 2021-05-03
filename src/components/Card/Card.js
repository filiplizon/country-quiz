import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Flag from 'components/Flag/Flag';
import Paragraph from 'components/Paragraph/Paragraph';

const StyledWrapper = styled.li`
  min-height: 55vh;
  width: 95vw;
  display: grid;
  grid-template-rows: 0.7fr 0.15fr 0.25fr;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 500px) and (orientation: landscape) {
    width: 80vw;
    min-height: 85vh;
  }

  @media (min-width: 768px) {
    width: 80vw;
    min-height: 40vh;
  }

  @media (min-width: 800px) and (orientation: landscape) {
    width: 80vw;
    min-height: 85vh;
  }

  @media (min-width: 1024px) {
    width: 30vw;
  }
`;

const InnerWrapper = styled.div`
  display: ${({ hiddenInfo }) => (hiddenInfo ? 'none' : 'flex')};
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color && theme.primary};
  color: white;
`;

const StyledCountryName = styled.h2`
  margin: 15px 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledPararaph = styled(Paragraph)`
  margin: 0 0 10px;

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

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
      id,
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
      <StyledWrapper key={id}>
        <InnerWrapper>
          <Flag flag={flag} name={name} />
        </InnerWrapper>
        <InnerWrapper color="true">
          <StyledCountryName>{name}</StyledCountryName>
          <InnerWrapper hiddenInfo={hiddenInfo}>
            <StyledPararaph>Capital: {capital}</StyledPararaph>
            <StyledPararaph>Currency: {currency}</StyledPararaph>
            <StyledPararaph>Language: {language}</StyledPararaph>
            <StyledPararaph>Population: {population}</StyledPararaph>
            <StyledPararaph>Region: {region}</StyledPararaph>
            <StyledPararaph>Subregion: {subregion}</StyledPararaph>
            <StyledPararaph>Timezone: {timezone}</StyledPararaph>
          </InnerWrapper>
        </InnerWrapper>
        <InnerWrapper>
          <Button
            onClick={() => {
              this.toggleInfoVisibility();
            }}
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
