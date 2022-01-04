import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Quiz from 'components/Quiz/Quiz';
import CountryInformation from 'components/CountryInformation/CountryInformation';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Quiz} />
          <Route exact path="/info" component={CountryInformation} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
