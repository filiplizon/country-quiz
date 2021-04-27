import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');


 *,*::before,*::after {
     box-sizing:border-box;
     -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
 }

 html {
     font-size:10px;
 }

 body {
     padding: 0;
     margin: 0;
     font-size: 1.6rem;
     font-family: 'Montserrat', sans-serif;
 }
`;

export default GlobalStyle;
