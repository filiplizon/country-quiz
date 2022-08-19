/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'helpers/GlobalStyle';
import { theme } from 'helpers/mainTheme';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import { getAllCountries as getAllCountriesAction } from 'operations/operations';

const MainTemplate = ({ children, getAllCountries, setUser }) => {
  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getAllCountries: () => dispatch(getAllCountriesAction()),
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(null, mapDispatchToProps)(MainTemplate);
