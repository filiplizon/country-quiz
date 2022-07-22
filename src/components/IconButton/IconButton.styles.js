import styled from 'styled-components';

export const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  align-items: center;
  justify-content: center;
  align-self: ${({ alignEnd }) => (alignEnd ? 'end' : 'center')};
  cursor: pointer;
  display: flex;
  z-index: 1000;

  @media (max-height: 600px) and (orientation: landscape) {
    width: 30px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    width: 40px;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1600px) {
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
