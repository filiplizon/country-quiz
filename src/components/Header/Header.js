import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
import Navigation from 'components/Navigation/Navigation';
import Input from 'components/Input/Input';
import BurgerButton from 'components/BurgerButton/BurgerButton';

const Header = ({ className }) => (
  <header className={className} id="outer-container">
    <Logo src={LogoImage} alt="CountryInfo logo" />
    <Input className="Input" />
    <BurgerButton />
    <Navigation />
  </header>
);

const StyledHeader = styled(Header)`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

export default StyledHeader;
