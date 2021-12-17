import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import actions from 'actions/actions';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Link from 'components/Link/Link';

const UserInfo = ({ user, setUser, setSidePanelOpenFn, quizLength }) => {
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

  return (
    <StyledUserInfo>
      <StyledName>{user.name}</StyledName>
      <StyledParagraph>
        Signed in: <span>{user.signedIn}</span>{' '}
      </StyledParagraph>
      <StyledParagraph>
        Games played: <span>{user.gamesPlayed}</span>
      </StyledParagraph>
      <StyledParagraph>
        Average score:{' '}
        <span>
          {user.gamesPlayed > 0
            ? `${user.averageScore.points}/${quizLength} - ${user.averageScore.time.minutes}:${user.averageScore.time.seconds}:${user.averageScore.time.miliseconds}`
            : `0/${quizLength} - 00:00:00`}
        </span>
      </StyledParagraph>

      <StyledLink onClick={logOut} to="/">
        SIGN OUT
      </StyledLink>
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
  const { user, quizLength } = state;
  return {
    user,
    quizLength,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
