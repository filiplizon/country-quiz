import { keyframes } from 'styled-components';

export const grow = keyframes`
  from {
   transform:scale(0);
   opacity: 0;
  }

  to {
   opacity:1;
   transform:scale(1)
  }
`;
