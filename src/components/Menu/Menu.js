import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import actions from 'actions/actions';
import { connect } from 'react-redux';
import IconButton from 'components/IconButton/IconButton';
import { ImUser as ProfilIcon } from 'react-icons/im';
import { GoInfo as InfoIcon } from 'react-icons/go';

const Menu = ({ isMenuOpen, setModalOpenFn, setFormType, setMenuOpen, user, start, level }) => (
  <StyledMenuWrapper isMenuOpen={isMenuOpen}>
    <StyledMenu>
      {!start && level === '' && (
        <StyledIconButton isVisible>
          <Link to="/info">
            <InfoIcon />
          </Link>
        </StyledIconButton>
      )}
      {Object.keys(user).length === 0 ? (
        <>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              setModalOpenFn(true);
              setFormType('registration');
            }}
          >
            <Link to="/">SIGN UP</Link>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              setModalOpenFn(true);
              setFormType('login');
            }}
          >
            <Link to="/">SIGN IN</Link>
          </StyledMenuItem>
        </>
      ) : (
        <StyledIconButton isVisible>
          <ProfilIcon />
        </StyledIconButton>
      )}
    </StyledMenu>
  </StyledMenuWrapper>
);

const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 100%;
  z-index: 991000;

  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.secondary};
  transition: transform 0.5s;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 1100px) {
    position: static;
    transform: translateY(0);
    height: 100%;
    width: unset;
    background-color: transparent;
    box-shadow: none;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 25px;
  height: 100%;

  @media (min-width: 1100px) {
    flex-direction: row;
    height: 100%;
  }
`;

const StyledMenuItem = styled.li`
  padding: 10px 20px;
  list-style-type: none;
  position: relative;
  transition: transform 0.3s;

  :hover {
    transform: translateY(-5px);
  }

  @media (min-width: 1100px) {
    padding: 10px;

    ${Link} {
      color: ${({ theme }) => theme.primary};
    }

    &:nth-of-type(1)::after,
    &:nth-of-type(2)::after {
      content: '';
      height: 50%;
      width: 1px;
      background-color: #dad8d8;
      position: relative;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${Link} {
    display: flex;

    font-size: ${({ theme }) => theme.fontSize.l};
    &:hover {
      transform: translateY(0);
    }
  }

  @media (min-width: 1100px) {
    margin: 0 20px;
  }
`;

const mapStateToProps = (state) => {
  const { user, start, level } = state;
  return { user, start, level };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
