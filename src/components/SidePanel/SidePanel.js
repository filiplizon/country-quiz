import React from 'react';
import styled from 'styled-components';
import UserProfile from 'components/UserProfile/UserProfile';
import Button from 'components/Button/Button';
import IconButton from 'components/IconButton/IconButton';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';

const SidePanel = ({ isSidePanelOpen, setSidePanelOpenFn }) => (
  <StyledSidePanel isSidePanelOpen={isSidePanelOpen}>
    <StyledIconButton onClick={() => setSidePanelOpenFn(false)} isVisible>
      <CloseIcon />
    </StyledIconButton>
    <UserProfile setSidePanelOpenFn={setSidePanelOpenFn} />
    <StyledButton>History</StyledButton>
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

const StyledButton = styled(Button)`
  padding: 0;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: ${({ theme }) => theme.secondary};
  height: 10%;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  @media (min-width: 1100px) {
    color: #fff;
  }
`;

export default SidePanel;
