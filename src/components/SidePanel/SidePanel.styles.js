import styled from 'styled-components';
import IconButton from 'components/IconButton/IconButton';

export const StyledSidePanel = styled.div`
  position: fixed;
  right: 0;
  top: 15vh;
  width: 100%;
  height: 85vh;
  background-color: ${({ theme }) => theme.secondary};
  z-index: 999999999;
  transform: ${({ isSidePanelOpen }) => (isSidePanelOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.3s transform;

  @media (max-height: 600px) and (orientation: landscape) {
    width: 28%;
    box-shadow: -3px 0px 15px -8px rgba(66, 68, 90, 1);
  }

  @media (min-width: 1100px) {
    width: 28%;
    box-shadow: -3px 0px 15px -8px rgba(66, 68, 90, 1);
  }
`;

export const StyledIconButton = styled(IconButton)`
  top: 14px;
  right: 20px;
  position: fixed;
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media (max-height: 600px) and (orientation: landscape) {
    top: 5px;
  }
`;
