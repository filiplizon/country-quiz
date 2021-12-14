import React from 'react';
import styled from 'styled-components';
import UserProfile from 'components/UserProfile/UserProfile';
import Button from 'components/Button/Button';

const SidePanel = () => (
  <StyledSidePanel>
    <UserProfile />
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
  transform: translateX(0);
  transition: 0.3s transform;

  @media (min-width: 1100px) {
    width: 28%;
    border-left: ${({ theme }) => `1px solid ${theme.secondary}`};
  }
`;

const StyledButton = styled(Button)`
  padding: 0;
  position: fixed;
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
