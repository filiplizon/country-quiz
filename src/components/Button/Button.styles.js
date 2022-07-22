import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  outline-color: ${({ theme }) => theme.secondary};
  z-index: 2;
  box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);

  :hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &.active {
    background-color: ${({ theme, level }) => (level ? theme.primary : theme.secondary)};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 5px 20px;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
