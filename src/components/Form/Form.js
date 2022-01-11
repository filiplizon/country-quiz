/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import actions from 'actions/actions';
import { connect } from 'react-redux';
import { db } from 'firebase';
import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'components/Link/Link';
import Input from 'components/Input/Input';
import Paragraph from 'components/Paragraph/Paragraph';

const Form = ({ formType, setFormType, setUser, setModalOpenFn, isFormReset }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [errorText, setErrorText] = useState('');
  const collectionRef = collection(db, 'users');
  const auth = getAuth();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setErrorText('');
  };

  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((docc) => ({ ...docc.data(), id: docc.id })));
    });
    isFormReset && resetForm();
    isFormReset === 'ok' && resetForm();
  }, [isFormReset]);

  const registerUser = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userID = userCredential.user.uid;
        const newDocRef = doc(collection(db, 'users'));
        const today = new Date();
        const date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
        setDoc(newDocRef, {
          email,
          authID: userID,
          name,
          id: newDocRef.id,
          games: [],
          signedIn: date,
          gamesPlayed: 0,
          averageScore: {
            points: 0,
            time: '00:00:00',
          },
          bestScore: {
            flags: {
              easy: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
              medium: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
              hard: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
            },
            capitals: {
              easy: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
              medium: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
              hard: {
                points: 0,
                time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
              },
            },
          },
        });
        onSnapshot(collectionRef, (snapshot) => {
          const currentUser = snapshot.docs
            .map((docc) => ({ ...docc.data(), id: docc.id }))
            .find((el) => el.email === email);
          setUser(currentUser);
        });
        setModalOpenFn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        errorCode === 'auth/weak-password' &&
          setErrorText('Password should be at least 6 characters');
        errorCode === 'auth/email-already-in-use' && setErrorText('Email already in use');
        errorCode === 'auth/invalid-email' && setErrorText('Invalid mail');
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userID = userCredential.user.uid;
        const currentUser = users.find((usere) => usere.authID === userID);
        setUser(currentUser);
        setModalOpenFn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        errorCode === 'auth/invalid-email' && setErrorText('Invalid mail');
        errorCode === 'auth/user-not-found' && setErrorText('User not found');
        errorCode === 'auth/wrong-password' && setErrorText('Wrong password');
      });
  };

  return (
    <StyledWrapper>
      {formType === 'registration' ? (
        <>
          <InputWrapper>
            <StyledInput
              onChange={(e) => setName(e.target.value)}
              formInput
              placeholder="Name"
              value={name}
              maxLength="12"
            />
            <StyledInput
              onChange={(e) => setEmail(e.target.value)}
              formInput
              placeholder="Email"
              value={email}
            />
            <StyledInput
              onChange={(e) => setPassword(e.target.value)}
              formInput
              placeholder="Password"
              type="password"
              value={password}
            />
          </InputWrapper>
          <StyledError errorText={errorText}>{errorText}</StyledError>
          <StyledParagraph>
            Already a member?{' '}
            <Link
              onClick={() => {
                setFormType('login');
                resetForm();
              }}
              to="/"
              primary="true"
            >
              SIGN IN
            </Link>
          </StyledParagraph>
          <StyledLinkContainer onClick={registerUser}>
            <Link to="/">SIGN UP</Link>
          </StyledLinkContainer>
        </>
      ) : (
        <>
          <InputWrapper>
            <StyledInput
              value={email}
              formInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <StyledInput
              value={password}
              formInput
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </InputWrapper>
          <StyledError errorText={errorText}>{errorText}</StyledError>
          <StyledParagraph>
            Not a member yet?{' '}
            <Link
              onClick={() => {
                setFormType('registration');
                resetForm();
              }}
              to="/"
              primary="true"
            >
              SIGN UP
            </Link>
          </StyledParagraph>
          <StyledLinkContainer onClick={signIn}>
            <Link to="/">SIGN IN</Link>
          </StyledLinkContainer>
        </>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.form`
  margin-top: 60vh;
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 30px 0;
    height: calc(100% - 20%);
  }
`;

const InputWrapper = styled.div`
  width: 70%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const StyledInput = styled(Input)`
  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xs} ${Link} {
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    color: ${({ color }) => (color ? '#ff444f' : '#e0e0e0')};

    ${Link} {
      font-size: 1.3rem;
      color: #fff;
    }
  }

  @media (min-width: 1600px) {
    font-size: 1.4rem;
  }
`;

const StyledError = styled(Paragraph)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  font-weight: bold;
  display: ${({ errorText }) => (errorText ? 'block' : 'none')};
`;

const StyledLinkContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  cursor: pointer;

  &:hover {
    ${Link} {
      transform: translateY(-5px);
    }
  }

  @media (min-width: 768px) {
    background-color: #fff;
    height: 20%;

    ${Link} {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const mapStateToProps = (state) => {
  const { isFormReset, user } = state;
  return { isFormReset, user };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
