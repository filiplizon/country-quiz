import React from 'react';
import UserProfile from 'components/UserProfile/UserProfile';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import Rankings from 'components/Rankings/Rankings';
import { StyledSidePanel, StyledIconButton } from './SidePanel.styles';

const SidePanel = ({
  isSidePanelOpen,
  setSidePanelOpenFn,
  panelType,
  setPanelTypeFn,
  setPlayerToDisplayFn,
  user,
}) => (
  <StyledSidePanel isSidePanelOpen={isSidePanelOpen}>
    <StyledIconButton
      onClick={() => {
        setSidePanelOpenFn(false);
        setPlayerToDisplayFn(user);
      }}
      isVisible
    >
      <CloseIcon />
    </StyledIconButton>
    {panelType === 'rankings' ? (
      <Rankings setPanelTypeFn={setPanelTypeFn} />
    ) : (
      <UserProfile setSidePanelOpenFn={setSidePanelOpenFn} />
    )}
  </StyledSidePanel>
);

export default SidePanel;
