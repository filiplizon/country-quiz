import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
import QuizBar from 'components/QuizBar/QuizBar';
import Input from 'components/Input/Input';
import BurgerButton from 'components/BurgerButton/BurgerButton';

const Header = ({ className, menuOpen, toggleMenuStateFn, searchCountryFn }) => (
  <StyledHeader className={className}>
    <Logo src={LogoImage} alt="CountryInfo logo" />
    <Input className="Input" onChange={(e) => searchCountryFn(e)} />
    <BurgerButton toggleMenuStateFn={toggleMenuStateFn} open={menuOpen} />
    <QuizBar open={menuOpen} />
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: ${({ menuOpen }) => (menuOpen ? 'none' : '0 10px 30px -10px hsla(0, 0%, 0%, 0.1)')};

  @media (min-width: 500px) {
    padding-left: 3vw;
  }
`;

export default Header;
