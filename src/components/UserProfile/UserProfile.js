import React from 'react';
import UserInfo from 'components/UserInfo/UserInfo';
import BestScores from 'components/BestScores/BestScores';

const UserProfile = ({ setSidePanelOpenFn }) => (
  <>
    <UserInfo setSidePanelOpenFn={setSidePanelOpenFn} />
    <BestScores />
  </>
);

export default UserProfile;
