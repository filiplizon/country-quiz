/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import actions from 'actions/actions';
import { StyledUserInfo, StyledLink, StyledName, StyledParagraph } from './UserInfo.styles';

const UserInfo = ({
  user,
  setUser,
  setSidePanelOpenFn,
  quizLength,
  playerToDisplay,
  setPlayerToDisplay,
  resetLevel,
  resetType,
}) => {
  const auth = getAuth();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setSidePanelOpenFn(false);
        resetLevel();
        resetType();
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Object.keys(playerToDisplay).length > 0 ? playerToDisplay : setPlayerToDisplay(user); // eslint-disable-line
  }, []);

  return (
    <StyledUserInfo>
      <StyledName>{playerToDisplay.name}</StyledName>
      <StyledParagraph>
        Signed in: <span>{playerToDisplay.signedIn}</span>
      </StyledParagraph>
      <StyledParagraph>
        Games played: <span>{playerToDisplay.gamesPlayed}</span>
      </StyledParagraph>
      <StyledParagraph>
        Average score:{' '}
        <span>
          {playerToDisplay.gamesPlayed > 0
            ? `${playerToDisplay.averageScore.points}/${quizLength} - ${playerToDisplay.averageScore.time.minutes}:${playerToDisplay.averageScore.time.seconds}:${playerToDisplay.averageScore.time.miliseconds}`
            : `0/${quizLength} - 00:00:00`}
        </span>
      </StyledParagraph>
      {playerToDisplay.id === user.id && (
        <StyledLink onClick={logOut} to="/">
          sign out
        </StyledLink>
      )}
    </StyledUserInfo>
  );
};

const mapStateToProps = (state) => {
  const { user, quizLength, playerToDisplay } = state;
  return {
    user,
    quizLength,
    playerToDisplay,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(actions.setUser(user)),
  setPlayerToDisplay: (playerToDisplay) => dispatch(actions.setPlayerToDisplay(playerToDisplay)),
  resetLevel: () => dispatch(actions.resetLevel()),
  resetType: () => dispatch(actions.resetType()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
