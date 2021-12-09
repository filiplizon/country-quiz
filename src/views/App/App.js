import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Quiz from 'components/Quiz/Quiz';
import HomePage from 'components/HomePage/HomePage';
// import InfoPopup from 'components/InfoPopup/InfoPopup';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/info" component={HomePage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
