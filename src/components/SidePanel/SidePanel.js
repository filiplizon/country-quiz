import React from 'react';
import styled from 'styled-components';
import UserProfile from 'components/UserProfile/UserProfile';
import IconButton from 'components/IconButton/IconButton';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import Rankings from 'components/Rankings/Rankings';

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

const StyledSidePanel = styled.div`
  position: fixed;
  right: 0;
  top: 15vh;
  width: 100%;
  height: 85vh;
  background-color: ${({ theme }) => theme.secondary};
  z-index: 999999999;
  transform: ${({ isSidePanelOpen }) => (isSidePanelOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.3s transform;

  @media (min-width: 1100px) {
    width: 28%;
    box-shadow: -3px 0px 15px -8px rgba(66, 68, 90, 1);
  }
`;

const StyledIconButton = styled(IconButton)`
  top: 14px;
  right: 20px;
  position: fixed;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default SidePanel;
