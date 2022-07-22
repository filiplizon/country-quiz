import styled from 'styled-components';

export const StyledCardWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 0;
  padding: 15vh 3% 0;

  @media (max-height: 600px) and (orientation: landscape) {
    padding: 17vh 3% 0;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;
