/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import actions from 'actions/actions';
import { connect } from 'react-redux';
import { db } from 'firebase';
import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'components/Link/Link';
import {
  StyledWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledParagraph,
  StyledError,
  StyledLinkContainer,
} from './Form.styles';

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
        const initialScore = {
          points: 0,
          time: { total: 9999999999999999999999999, minutes: 0, seconds: 0, miliseconds: 0 },
        };

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
                initialScore,
              },
              medium: {
                initialScore,
              },
              hard: {
                initialScore,
              },
            },
            capitals: {
              easy: {
                initialScore,
              },
              medium: {
                initialScore,
              },
              hard: {
                initialScore,
              },
            },
          },
        });

        onSnapshot(collectionRef, (snapshot) => {
          const currentUser = snapshot.docs
            .map((docc) => ({ ...docc.data(), id: docc.id }))
            .find((el) => el.email === email);
          setUser(currentUser);
          localStorage.setItem('user', JSON.stringify(currentUser));
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
        localStorage.setItem('user', JSON.stringify(currentUser));
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
          <StyledInputWrapper onKeyPress={(e) => e.key === 'Enter' && registerUser(e)}>
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
          </StyledInputWrapper>
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
          <StyledInputWrapper onKeyPress={(e) => e.key === 'Enter' && signIn(e)}>
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
          </StyledInputWrapper>
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

const mapStateToProps = (state) => {
  const { isFormReset, user } = state;
  return { isFormReset, user };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
