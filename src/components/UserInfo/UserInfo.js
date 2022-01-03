import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Link from 'components/Link/Link';

const UserInfo = ({
  user,
  setUser,
  setSidePanelOpenFn,
  quizLength,
  playerToDisplay,
  setPlayerToDisplay,
}) => {
  const auth = getAuth();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setSidePanelOpenFn(false);
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
      {playerToDisplay === user && (
        <StyledLink onClick={logOut} to="/">
          sign out
        </StyledLink>
      )}
    </StyledUserInfo>
  );
};
const StyledUserInfo = styled.div`
  height: 35%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

const StyledName = styled(Heading)`
  margin-bottom: 20px;

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin-bottom: 10px;

  & span {
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  align-self: center;
  overflow: hidden;
  font-weight: 400;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: translateX(-100%);
    transition: 0.2s transform;
  }

  &:hover {
    transform: translateY(0);

    &::after {
      transform: translateX(0);
    }
  }
`;

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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
