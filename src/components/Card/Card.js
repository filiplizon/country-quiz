import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import Flag from 'components/Flag/Flag';

const StyledWrapper = styled.li`
  height: 50vh;
  width: 95vw;
  display: grid;
  grid-template-rows: 1fr 0.25fr 0.25fr;
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

  @media (min-width: 1100px) {
    width: 20vw;
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

  &:nth-last-child(1) {
    cursor: pointer;
  }

  &:nth-last-child(1):hover ${Link} {
    transform: translateY(-5px);
  }
  & ${Link} {
    z-index: 465;
  }
`;

const StyledCountryName = styled.h2`
  margin: 15px 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2;
  text-align: center;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Card = ({ onClick, country, setPopUpVisibilityFn, setCurrentCountryFn, isPopupOpen }) => (
  <StyledWrapper onClick={onClick} key={country.id}>
    <InnerWrapper>
      <Flag flag={country.flag} name={country.name} />
    </InnerWrapper>
    <InnerWrapper color="true">
      <StyledCountryName>{country.name}</StyledCountryName>
    </InnerWrapper>
    <InnerWrapper
      onClick={() => {
        if (isPopupOpen) {
          setCurrentCountryFn(country);
        } else {
          console.log(country);
          setCurrentCountryFn(country);
          setPopUpVisibilityFn(!isPopupOpen);
        }
      }}
    >
      <Link primary to={`/info/`}>
        Show info
      </Link>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
