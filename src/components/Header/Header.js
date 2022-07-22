import React, { useState } from 'react';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import Input from 'components/Input/Input';
import LogoImage from 'assets/images/logo.png';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { IoMenuSharp as MenuIcon, IoCloseOutline as CloseIcon } from 'react-icons/io5';
import { StyledHeader, StyledLink, StyledIconButton, StyledInputContainer } from './Header.styles';
/* eslint-disable no-unused-expressions */

const Header = ({
  searchCountryFn,
  isQuiz,
  setModalOpenFn,
  isModalOpen,
  setSidePanelOpenFn,
  setPanelTypeFn,
  setPopUpVisibilityFn,
  start,
  counter,
  resetLevel,
  resetType,
  // resetForm,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader isQuiz={isQuiz}>
      <StyledLink
        primary="true"
        to="/"
        onClick={() => {
          isQuiz && resetType();
          isQuiz && resetLevel();
          if (isModalOpen) {
            setModalOpenFn(false);
            // resetForm();
          }
        }}
      >
        <Logo src={LogoImage} alt="CountryInfo" />
      </StyledLink>
      {!isQuiz && (
        <StyledInputContainer
          onClick={() => {
            setPopUpVisibilityFn(false);
            document.body.style.overflow = 'unset';
          }}
        >
          <Input placeholder="Search" onChange={(e) => searchCountryFn(e)} />
          <SearchIcon />
        </StyledInputContainer>
      )}
      {isQuiz && (!start || (start && counter === 10)) && (
        <StyledIconButton onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </StyledIconButton>
      )}
      {isQuiz && !start && (
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

export default Header;
