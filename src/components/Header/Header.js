import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
// import QuizBar from 'components/QuizBar/QuizBar';
import Input from 'components/Input/Input';

import Link from 'components/Link/Link';

const Header = ({ className, searchCountryFn }) => (
  <StyledHeader className={className}>
    <Logo src={LogoImage} alt="CountryInfo logo" />
    <Input className="Input" onChange={(e) => searchCountryFn(e)} />
    <Link to="/quiz">QUIZ</Link>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  background-color: white;
  box-shadow: ${({ menuOpen, theme }) => (menuOpen ? 'none' : theme.boxShadow)};

  @media (min-width: 500px) {
    padding: 0 3vw;
  }
`;

export default Header;
