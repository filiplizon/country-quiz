import React, { useState } from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import BestScores from 'components/BestScores/BestScores';
import GamesHistory from 'components/GamesHistory/GamesHistory';
import { StyledButton } from './UserProfile.styles';

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

export default UserProfile;
