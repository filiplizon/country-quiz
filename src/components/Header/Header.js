import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import LogoImage from 'assets/images/logo.png';
import Navigation from 'components/Navigation/Navigation';
import Input from 'components/Input/Input';
import BurgerButton from 'components/BurgerButton/BurgerButton';

class Header extends Component {
  state = {
    menuOpen: false,
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  toggleMenuState() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    const { className } = this.props;
    const { menuOpen } = this.state;
    return (
      <header className={className}>
        <Logo src={LogoImage} alt="CountryInfo logo" />
        <Input className="Input" />
        <BurgerButton toggleMenuStateFn={() => this.toggleMenuState()} open={menuOpen} />
        <Navigation open={menuOpen} />
      </header>
    );
  }
}

const StyledHeader = styled(Header)`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
`;

export default StyledHeader;
