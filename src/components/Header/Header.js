import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import Link from 'components/Link/Link';
import Input from 'components/Input/Input';
import IconButton from 'components/IconButton/IconButton';
import LogoImage from 'assets/images/logo.png';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { IoMenuSharp as MenuIcon, IoCloseOutline as CloseIcon } from 'react-icons/io5';
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

  @media (min-width: 768px) {
    padding: 0 3vw;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    padding: 0 3vw;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 0.15fr 1fr 0.15fr;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    transform: translateX(0);
  }
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: ${({ theme }) => theme.fontSize.xl};
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

  @media (min-width: 768px) {
    width: 35%;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: 30%;
    left: 50%;
  }

  @media (min-width: 1100px) {
    width: 20%;
    left: 50%;
  }

  @media (min-width: 1600px) {
    width: 15%;
  }
`;

export default Header;
