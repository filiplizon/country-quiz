import React from 'react';
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
  align-items: center;
  justify-content: center;
`;

const StyledCountryName = styled.h2`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2;
  text-align: center;
`;

const Card = ({ name, flag }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Flag flag={flag} name={name} />
    </InnerWrapper>
    <InnerWrapper>
      <StyledCountryName>{name}</StyledCountryName>
    </InnerWrapper>
    <InnerWrapper>
      <Button>Show Info</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
