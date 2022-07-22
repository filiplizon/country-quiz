import styled from 'styled-components';
import IconButton from 'components/IconButton/IconButton';
import Link from 'components/Link/Link';

export const StyledHeader = styled.header`
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: ${({ isQuiz }) => (isQuiz ? 'space-between' : 'flex-start')};
  align-items: center;
  padding-right: 10px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 1413;

  @media (min-width: 768px) {
    padding: 0 3vw;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    padding: 0 3vw;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 0.15fr 1fr 0.15fr;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    transform: translateX(0);
  }
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    display: none;
  }
`;

export const StyledInputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 57%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 35%;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: 30%;
    left: 50%;
  }

  @media (min-width: 1100px) {
    width: 20%;
    left: 50%;
  }

  @media (min-width: 1600px) {
    width: 15%;
  }
`;
