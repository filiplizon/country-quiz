import styled from 'styled-components';
import IconButton from 'components/IconButton/IconButton';

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  transition: 0.3 s opacity;
  display: block;
  visibility: ${({ isModalOpen }) => (isModalOpen ? 'visible' : 'hidden')};

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    width: 400px;
    height: 340px;
    background-color: ${({ theme }) => theme.secondary};
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }) => theme.boxShadow};
    z-index: 100000;
  }
`;

export const StyledBackgroundWrapper = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    background-color: ${({ isModalOpen }) => (isModalOpen ? 'rgba(255, 255,255, 0.5)' : null)};
    display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};
    z-index: 100000;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  background-color: #fff;
  top: calc(15vh + 10px);
  right: 10px;
  display: none;

  @media (min-width: 768px) {
    right: 5px;
    top: 5px;
    display: flex;
  }
`;
