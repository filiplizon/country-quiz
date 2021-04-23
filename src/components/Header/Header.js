import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
import Input from 'components/Input/Input';
import Link from 'components/Link/Link';
import { FiSearch as SearchIcon } from 'react-icons/fi';

const Header = ({ searchCountryFn }) => (
  <StyledHeader>
    <Logo src={LogoImage} alt="CountryInfo logo" />
    <Input className="Input" placeholder="Search" onChange={(e) => searchCountryFn(e)}>
      <SearchIcon />
    </Input>
    <Link to="/quiz">QUIZ</Link>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.15fr;
  align-items: center;
  padding-right: 10px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 1000;

  @media (min-width: 500px) {
    padding: 0 3vw;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 0.15fr 1fr 0.15fr;
  }
`;

export default Header;
