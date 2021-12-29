import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from 'firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const Rankings = () => {
  const types = ['flags', 'capitals'];
  const levels = ['easy', 'medium', 'hard'];
  const [, setType] = useState(null);
  const [, setLevel] = useState(null);

  const [allUsers, setAllUsers] = useState([]);
  const [isActiveType, setActiveType] = useState(0);
  const [isActiveLevel, setActiveLevel] = useState(0);

  const users = [];
  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, 'users'), where('gamesPlayed', '>', 0));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
        setAllUsers(users);
        console.log(allUsers);
      });
    };
    getUsers();
  }, []);

  return (
    <StyledRankingsWrapper>
      <StyledHeading>Rankings</StyledHeading>
      <StyledButtonContainer>
        {types.map((el, i) => (
          <StyledButton
            className={isActiveType === i && 'active'}
            onClick={() => {
              setType(el);
              setActiveType(i);
            }}
          >
            {el}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <StyledButtonContainer>
        {levels.map((el, i) => (
          <StyledButton
            className={isActiveLevel === i && 'active'}
            onClick={() => {
              setLevel(el);
              setActiveLevel(i);
            }}
          >
            {el}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <StyledRankings>
        <StyledGameDetailsTitles>
          <StyledGameDetailsTitle>User</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Points</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Time</StyledGameDetailsTitle>
          <StyledGameDetailsTitle>Date</StyledGameDetailsTitle>
        </StyledGameDetailsTitles>

        <StyledGameDetailsRow>
          <StyledGameDetail>imie</StyledGameDetail>
          <StyledGameDetail>4</StyledGameDetail>
          <StyledGameDetail>00:09:85</StyledGameDetail>
          <StyledGameDetail>11.02.1998</StyledGameDetail>
        </StyledGameDetailsRow>
        <StyledGameDetailsRow>
          <StyledGameDetail>imie</StyledGameDetail>
          <StyledGameDetail>4</StyledGameDetail>
          <StyledGameDetail>00:09:85</StyledGameDetail>
          <StyledGameDetail>11.02.1998</StyledGameDetail>
        </StyledGameDetailsRow>
        <StyledGameDetailsRow>
          <StyledGameDetail>imie</StyledGameDetail>
          <StyledGameDetail>4</StyledGameDetail>
          <StyledGameDetail>00:09:85</StyledGameDetail>
          <StyledGameDetail>11.02.1998</StyledGameDetail>
        </StyledGameDetailsRow>
      </StyledRankings>
    </StyledRankingsWrapper>
  );
};

const StyledRankingsWrapper = styled.div`
  height: 100%;
`;

const StyledHeading = styled(Heading)`
  width: 100%;
  height: 20%;
  text-align: center;
  color: #fff;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: #fff;
  color: ${({ theme }) => theme.secondary};

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledRankings = styled.div`
  height: 73%;
  background-color: #fff;
`;

const StyledGameDetailsTitles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  padding: 5px 0;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

const StyledGameDetailsTitle = styled.button`
  margin: 0;
  padding: 10px 0;
  width: 100%;
  border: none;
  background-color: #fff;
  font-weight: bold;
`;

const StyledGameDetailsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: 10%;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;
`;

export default Rankings;
