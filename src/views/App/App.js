import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header/Header';
import CardWrapper from 'components/CardWrapper/CardWrapper';
// import Card from 'components/Card/Card';

const App = () => (
  <MainTemplate>
    <Header className="header" />
    <CardWrapper />
  </MainTemplate>
);

export default App;
