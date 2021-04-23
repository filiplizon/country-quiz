import actions from 'actions/actions';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all'); // eslint-disable-line
  const json = await response.json();

  return json;
};

export const getAllCountries = () => async (dispatch) => {
  const countries = await fetchCountries();
  dispatch(actions.fetch(countries));
};
