import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Link from 'components/Link/Link';
import IconButton from 'components/IconButton/IconButton';
import { ImUser as ProfilIcon } from 'react-icons/im';
import { GoInfo as InfoIcon } from 'react-icons/go';
import { FaMedal as RankingIcon } from 'react-icons/fa';

const Menu = ({
  isMenuOpen,
  setModalOpenFn,
  setFormType,
  setMenuOpen,
  user,
  start,
  resetForm,
  setSidePanelOpenFn,
  setPanelTypeFn,
  setPlayerToDisplay,
  counter,
}) => (
  <StyledMenuWrapper isMenuOpen={isMenuOpen}>
    <StyledMenu>
      {!start && (
        <StyledMenuItem onClick={() => setMenuOpen(!isMenuOpen)}>
          <Link to="/info">
            <span>Country information</span>
            <StyledIconButton>
              <InfoIcon />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
      )}
      {Object.keys(user).length < 1 && (!start || (start && counter === 10)) ? (
        <>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              resetForm(true);
              setModalOpenFn(true);
              setFormType('registration');
            }}
          >
            <Link primary="true" to="/">
              SIGN UP
            </Link>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              resetForm('ok');
              setModalOpenFn(true);
              setFormType('login');
            }}
          >
            <Link primary="true" to="/">
              SIGN IN
            </Link>
          </StyledMenuItem>
        </>
      ) : (
        <>
          <StyledMenuItem>
            <Link
              to="/"
              onClick={() => {
                setPanelTypeFn('rankings');
                setSidePanelOpenFn(true);
                setPlayerToDisplay(user);
                setMenuOpen(!isMenuOpen);
              }}
            >
              <span>Rankings</span>
              <StyledIconButton>
                <RankingIcon />
              </StyledIconButton>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem>
            <Link
              to="/"
              onClick={() => {
                setPanelTypeFn('profile');
                setSidePanelOpenFn(true);
                setPlayerToDisplay(user);
                setMenuOpen(!isMenuOpen);
              }}
            >
              <span>Profile</span>
              <StyledIconButton>
                <ProfilIcon />
              </StyledIconButton>
            </Link>
          </StyledMenuItem>
        </>
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

  @media (min-width: 768px) {
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
  padding: 15px;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

const StyledIconButton = styled(IconButton)`
  transition: transform 0.3s;
  height: unset;

  @media (min-width: 768px) {
    height: 40px;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 30px;
  }

  @media (min-width: 1100px) {
    margin: 0 10px;
    height: 40px;
  }

  @media (min-width: 1600px) {
    height: 50px;
    width: 50px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledMenuItem = styled.li`
  list-style-type: none;
  position: relative;
  transition: transform 0.3s;

  ${Link} {
    display: flex;
    align-items: center;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 10px;

    ${Link} {
      color: ${({ theme }) => theme.primary};

      @media (min-width: 1600px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }

      & span {
        display: none;
      }
    }
  }

  @media (max-height: 600px) and (orientation: landscape) {
    ${Link} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

const mapStateToProps = (state) => {
  const { user, start, level, counter } = state;
  return { user, start, level, counter };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
  resetForm: (isFormReset) => dispatch(actions.resetForm(isFormReset)),
  setPlayerToDisplay: (playerToDisplay) => dispatch(actions.setPlayerToDisplay(playerToDisplay)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
