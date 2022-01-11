import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfo from 'components/UserInfo/UserInfo';
import BestScores from 'components/BestScores/BestScores';
import GamesHistory from 'components/GamesHistory/GamesHistory';
import Button from 'components/Button/Button';

const UserProfile = ({ setSidePanelOpenFn }) => {
  const [userDetailsType, setUserDetailsType] = useState('history');

  return (
    <>
      <UserInfo setSidePanelOpenFn={setSidePanelOpenFn} />
      {userDetailsType === 'best-scores' ? (
        <>
          <BestScores />{' '}
          <StyledButton onClick={() => setUserDetailsType('history')}>History</StyledButton>
        </>
      ) : (
        <>
          <GamesHistory />{' '}
          <StyledButton onClick={() => setUserDetailsType('best-scores')}>Best scores</StyledButton>
        </>
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  padding: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${({ theme }) => theme.secondary};
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    color: #fff;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default UserProfile;
