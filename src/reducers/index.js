import types from 'actions/types';

const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    default:
      return state;
  }
};
export default rootReducer;
