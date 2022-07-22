import styled from 'styled-components';
import Button from 'components/Button/Button';

export const StyledAnswerBox = styled.div`
  width: 100%;
  height: 20vh;
  position: absolute;
  bottom: 10vh;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    height: 15vh;
    width: 600px;
    bottom: 20vh;
  }

  @media (max-height: 600px) and (orientation: landscape) {
    height: 15vh;
    width: 80%;
    bottom: 10vh;
  }

  @media (min-width: 1100px) {
    height: 15vh;
    width: 80%;
    bottom: 10vh;
  }
`;

export const StyledAnswer = styled(Button)`
  height: 50%;
  width: 50%;
  border: 1px solid #fff;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &.correct {
    background-color: green;
  }

  &.active {
    background-color: ${({ theme, isAnswerCorrect, isChecked }) =>
      (isAnswerCorrect && isChecked && 'green') ||
      (!isAnswerCorrect && isChecked && 'red') ||
      (!isChecked && theme.primary)};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.primary};
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  border: 1px solid #fff;

  &:hover {
    background-color: #fff;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: ${({ theme }) => theme.secondary};
    color: #fff;
    height: 8vh;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-height: 600px) and (orientation: landscape) {
    width: 30%;
    height: 5vh;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    width: 30%;
    height: 5vh;
    border: none;
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
