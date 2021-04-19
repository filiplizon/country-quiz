import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

import Quiz from 'components/Quiz/Quiz';
import HomePage from 'components/HomePage/HomePage';

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
