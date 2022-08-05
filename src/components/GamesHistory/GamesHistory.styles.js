import styled from 'styled-components';
import Heading from 'components/Heading/Heading';

export const StyledGamesHistory = styled.div`
  height: ${({ playerToDisplay }) => (playerToDisplay.gamesPlayed > 0 ? '50%' : '55%')};
  background: #fff;
`;

export const StyledNameWrapper = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
`;

export const StyledName = styled(Heading)`
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledHistoryWrapper = styled.div`
  background-color: #fff;
  height: 80%;
  position: relative;
`;

export const StyledGameDetailsTitle = styled.div`
  padding: 10px 0;
  font-weight: bold;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0;
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledGameDetailsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  height: 15%;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

export const StyledGameDetailsTitles = styled.div`
  width: 100%;
  height: 15%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

export const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 0;
  }

  @media (min-width: 1100px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
