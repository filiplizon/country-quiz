import types from './types';

const fetch = (countries) => ({
  type: types.FETCH_COUNTRIES,
  countries,
});

export default { fetch };
