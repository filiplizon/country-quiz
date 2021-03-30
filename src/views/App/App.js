import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';

// import BurgerButton from 'components/BurgerButton/BurgerButton';

const App = () => (
  <div id="App">
    <GlobalStyle />
    <Header className="header" />
  </div>
);

export default App;
