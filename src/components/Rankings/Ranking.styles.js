import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

export const StyledRankingsWrapper = styled.div`
  height: 100%;
`;

export const StyledHeading = styled(Heading)`
  width: 100%;
  height: 20%;
  text-align: center;
  color: #fff;
  margin: auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
`;

export const StyledButton = styled(Button)`
  width: 50%;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: #fff;
  color: ${({ theme }) => theme.secondary};

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledRankings = styled.div`
  height: 66%;
  background-color: #fff;
  position: relative;
`;

export const StyledGameDetailsTitles = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 0px 3px -1px rgba(66, 68, 90, 1);
`;

export const StyledGameDetailsTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
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
  height: calc(88% / 8);

  &:nth-child(even) {
    background-color: #eee;
  }
`;

export const StyledGameDetail = styled.div`
  font-size: 1.3rem;
  padding: 10px;

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

  &.user {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.secondary};
      font-weight: bold;
    }
  }
`;
