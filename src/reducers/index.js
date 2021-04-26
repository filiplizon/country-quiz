import types from 'actions/types';
import { isAnswerCorrect } from 'operations/operations';
import _ from 'lodash';

const initialState = {
  countries: [],

  countriesByLevel: { easy: [], medium: [], hard: [] },
  countryCodes: {
    easy: [
      'POL',
      'RUS',
      'MEX',
      'ARG',
      'AUS',
      'CHN',
      'CZE',
      'BRA',
      'CAN',
      'FRA',
      'DEU',
      'IND',
      'ISR',
      'PRT',
      'USA',
      'ESP',
      'ITA',
      'BEL',
      'GRC',
    ],
    medium: [
      'AFG',
      'ALB',
      'ARM',
      'BGR',
      'CMR',
      'CHL',
      'COL',
      'HRV',
      'CUB',
      'EGY',
      'EST',
      'GEO',
      'HUN',
      'JPN',
      'KEN',
      'MNE',
      'MAR',
      'PAK',
      'SRB',
    ],
    hard: [
      'TUV',
      'VNM',
      'ZMB',
      'SOM',
      'SYC',
      'SMR',
      'WSM',
      'RWA',
      'QAT',
      'PNG',
      'PAN',
      'PLW',
      'OMN',
      'NER',
      'NIC',
      'NPL',
      'NRU',
      'MOZ',
      'HTI',
    ],
  },
  countriesForQuiz: [],
  quizType: '',
  level: '',
  points: 0,
  counter: 0,
  quizLength: 10,
  start: false,
  isAnswerCorrect: false,
  checked: false,
  answer: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
      };
    case types.CHOOSE_TYPE:
      return {
        ...state,
        quizType: action.quizType,
      };
    case types.CHOOSE_LEVEL:
      return {
        ...state,
        level: action.level,
      };
    case types.SET_COUNTRIES_LEVEL:
      return {
        ...state,
        countriesByLevel: {
          easy: state.countries.filter(({ alpha3Code }) =>
            state.countryCodes.easy.includes(alpha3Code),
          ),
          medium: state.countries.filter(({ alpha3Code }) =>
            state.countryCodes.medium.includes(alpha3Code),
          ),
          hard: state.countries.filter(({ alpha3Code }) =>
            state.countryCodes.hard.includes(alpha3Code),
          ),
        },
      };

    case types.SET_QUIZ_QUESTOINS:
      return {
        ...state,
        countriesForQuiz: _.sampleSize(action.countries[action.level], 10),
        start: true,
      };
    case types.SET_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };

    case types.CHECK_ANSWER:
      return {
        ...state,
        isAnswerCorrect: isAnswerCorrect(state),
        checked: !state.checked,
        points: isAnswerCorrect(state) ? state.points + 1 : state.points,
      };
    case types.CHANGE_QUESTION:
      return {
        ...state,
        answer: '',
        checked: !state.checked,
        counter: state.counter + 1,
        isAnswerCorrect: false,
      };
    // case types.FINISH_QUIZ:
    //   return {
    //     initialState,
    //     countries:
    //   };
    default:
      return state;
  }
};
export default rootReducer;
