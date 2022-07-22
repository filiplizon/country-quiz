import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Link from 'components/Link/Link';
import { ImUser as ProfilIcon } from 'react-icons/im';
import { GoInfo as InfoIcon } from 'react-icons/go';
import { FaMedal as RankingIcon } from 'react-icons/fa';
import { StyledMenuWrapper, StyledMenu, StyledIconButton, StyledMenuItem } from './Menu.styles';

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
