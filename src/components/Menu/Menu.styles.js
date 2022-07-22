import styled from 'styled-components';
import IconButton from 'components/IconButton/IconButton';
import Link from 'components/Link/Link';

export const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 100%;
  z-index: 991000;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.secondary};
  transition: transform 0.5s;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 768px) {
    position: static;
    transform: translateY(0);
    height: 100%;
    width: unset;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 15px;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const StyledIconButton = styled(IconButton)`
  transition: transform 0.3s;
  height: unset;

  @media (min-width: 768px) {
    height: 40px;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 30px;
  }

  @media (min-width: 1100px) {
    margin: 0 10px;
    height: 40px;
  }

  @media (min-width: 1600px) {
    height: 50px;
    width: 50px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledMenuItem = styled.li`
  list-style-type: none;
  position: relative;
  transition: transform 0.3s;

  ${Link} {
    display: flex;
    align-items: center;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 10px;

    ${Link} {
      color: ${({ theme }) => theme.primary};

      @media (min-width: 1600px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }

      & span {
        display: none;
      }
    }
  }

  @media (max-height: 600px) and (orientation: landscape) {
    ${Link} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;
