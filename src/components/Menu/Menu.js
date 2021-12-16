import React from 'react';
import styled from 'styled-components';
import Link from 'components/Link/Link';
import actions from 'actions/actions';
import { connect } from 'react-redux';
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
}) => (
  <StyledMenuWrapper isMenuOpen={isMenuOpen}>
    <StyledMenu>
      {!start && (
        <StyledMenuItem>
          <Link to="/info">
            <span>Country information</span>
            <StyledIconButton isVisible>
              <InfoIcon />
            </StyledIconButton>
          </Link>
        </StyledMenuItem>
      )}
      {Object.keys(user).length < 1 && !start ? (
        <>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              resetForm(true);
              setModalOpenFn(true);
              setFormType('registration');
            }}
          >
            <Link to="/">SIGN UP</Link>
          </StyledMenuItem>
          <StyledMenuItem
            onClick={() => {
              setMenuOpen(!isMenuOpen);
              resetForm('ok');
              setModalOpenFn(true);
              setFormType('login');
            }}
          >
            <Link to="/">SIGN IN</Link>
          </StyledMenuItem>
        </>
      ) : (
        !start && (
          <>
            <StyledMenuItem>
              <Link to="/">
                <span>Rankings</span>
                <StyledIconButton isVisible>
                  <RankingIcon />
                </StyledIconButton>
              </Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to="/" onClick={setSidePanelOpenFn}>
                <span>Profile</span>
                <StyledIconButton isVisible>
                  <ProfilIcon />
                </StyledIconButton>
              </Link>
            </StyledMenuItem>
          </>
        )
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
  padding: 5px;
  list-style-type: none;
  position: relative;
  transition: transform 0.3s;

  ${Link} {
    display: flex;
    align-items: center;
  }

  @media (min-width: 1100px) {
    padding: 10px;

    ${Link} {
      color: ${({ theme }) => theme.primary};

      & span {
        display: none;
      }
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  transition: transform 0.3s;
  height: unset;

  @media (min-width: 1100px) {
    margin: 0 10px;
    height: 40px;
  }
`;

const mapStateToProps = (state) => {
  const { user, start, level } = state;
  return { user, start, level };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
  resetForm: (isFormReset) => dispatch(actions.resetForm(isFormReset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
