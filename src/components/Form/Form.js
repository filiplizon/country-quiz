import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import actions from 'actions/actions';
import { connect } from 'react-redux';
import { db } from 'firebase';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'components/Link/Link';
import Input from 'components/Input/Input';
import Paragraph from 'components/Paragraph/Paragraph';

const Form = ({
  formType,
  setFormType,
  setUser,
  isPasswordCorrect,
  checkPassword,
  setModalOpenFn,
}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [, setUsers] = useState([]);
  const collectionRef = collection(db, 'users');
  const auth = getAuth();

  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handlePasswordCheck = () => {
    checkPassword(password === repeatedPassword);
  };

  const addNewUser = async () => {
    const payload = { login, password };
    handlePasswordCheck();
    isPasswordCorrect && // eslint-disable-line
      createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const userID = userCredential.user.uid;
          addDoc(collectionRef, payload);
          setUser({ login, password, id: userID });
          setModalOpenFn(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
        });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        const userID = userCredential.user.uid;
        setUser({ login, password, id: userID });
        setModalOpenFn(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <StyledWrapper>
      {formType === 'registration' ? (
        <>
          <InputWrapper>
            <Input
              onChange={(e) => setLogin(e.target.value)}
              formInput
              placeholder="Login"
              value={login}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              formInput
              placeholder="Password"
              type="password"
              value={password}
            />
            <Input
              onChange={(e) => setRepeatedPassword(e.target.value)}
              formInput
              placeholder="Repeat password"
              type="password"
              value={repeatedPassword}
            />
          </InputWrapper>
          <StyledParagraph>
            Already a member?{' '}
            <Link onClick={() => setFormType('login')} to="/">
              SIGN IN
            </Link>
          </StyledParagraph>
          <StyledLinkContainer>
            <Link onClick={addNewUser} to="/">
              SIGN UP
            </Link>
          </StyledLinkContainer>
        </>
      ) : (
        <>
          <InputWrapper>
            <Input
              value={login}
              formInput
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"
            />
            <Input
              value={password}
              formInput
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </InputWrapper>
          <StyledParagraph>
            Not a member yet?{' '}
            <Link onClick={() => setFormType('registration')} to="/">
              SIGN UP
            </Link>
          </StyledParagraph>
          <StyledLinkContainer>
            <Link onClick={() => signIn()} to="/">
              SIGN IN
            </Link>
          </StyledLinkContainer>
        </>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 60vh;
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1100px) {
    margin-top: 0;
    padding: 30px 0;
    height: calc(100% - 10vh);
  }
`;

const InputWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledParagraph = styled(Paragraph)`
  color: black;
  font-size: 1.6rem;

  ${Link} {
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: 1100px) {
    font-size: 1.3rem;
    color: #e0e0e0;

    ${Link} {
      font-size: 1.3rem;
      color: #fff;
    }
  }
`;

const StyledLinkContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.secondary};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};

  @media (min-width: 1100px) {
    background-color: #fff;

    ${Link} {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const mapStateToProps = (state) => {
  const { isPasswordCorrect, isUserLoggedIn } = state;
  return { isPasswordCorrect, isUserLoggedIn };
};

const mapDispatchToProps = (dispatch) => ({
  setFormType: (formType) => dispatch(actions.setFormType(formType)),
  registerUser: (action) => dispatch(actions.registerUser(action)),
  checkPassword: (isCorrect) => dispatch(actions.checkPassword(isCorrect)),
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
