import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'helpers/GlobalStyle';
import { theme } from 'helpers/mainTheme';
import { connect } from 'react-redux';
import { getAllCountries as getAllCountriesAction } from 'operations/operations';

const MainTemplate = ({ children, getAllCountries }) => {
  useEffect(() => {
    getAllCountries();
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
});

export default connect(null, mapDispatchToProps)(MainTemplate);
