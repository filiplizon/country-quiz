import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
import Input from 'components/Input/Input';
import IconButton from 'components/IconButton/IconButton';
import Link from 'components/Link/Link';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { IoMenuSharp as MenuIcon, IoCloseOutline as CloseIcon } from 'react-icons/io5';

import Menu from 'components/Menu/Menu';

const Header = ({
  searchCountryFn,
  isQuiz,
  setModalOpenFn,
  setSidePanelOpenFn,
  setPanelTypeFn,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader isQuiz={isQuiz}>
      <StyledLink primary to="/">
        <Logo src={LogoImage} alt="CountryInfo" />
      </StyledLink>
      {!isQuiz && (
        <StyledInputContainer>
          <Input className="Input" placeholder="Search" onChange={(e) => searchCountryFn(e)} />
          <SearchIcon />
        </StyledInputContainer>
      )}
      {isQuiz && (
        <StyledIconButton isVisible onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </StyledIconButton>
      )}
      {isQuiz && (
        <Menu
          setPanelTypeFn={setPanelTypeFn}
          setMenuOpen={setMenuOpen}
          setModalOpenFn={setModalOpenFn}
          setSidePanelOpenFn={setSidePanelOpenFn}
          isMenuOpen={isMenuOpen}
        />
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: ${({ isQuiz }) => (isQuiz ? 'space-between' : 'flex-start')};
  align-items: center;
  padding-right: 10px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 1413;

  @media (min-width: 500px) {
    padding: 0 3vw;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 0.15fr 1fr 0.15fr;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    transform: translateX(0);
  }
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 1100px) {
    display: none;
  }
`;

const StyledInputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 57%;
  transform: translateX(-50%);

  @media (min-width: 1100px) {
    width: 20%;
    left: 50%;
  }
`;

export default Header;
