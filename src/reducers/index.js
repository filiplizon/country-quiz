import types from 'actions/types';
import { checkIfScoreIsBest } from 'operations/operations';
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
  levels: {
    easy: { name: 'easy', next: 'medium' },
    medium: { name: 'medium', next: 'hard' },
    hard: { name: 'hard', next: '' },
  },
  points: 0,
  bestScore: {
    flags: {
      easy: 0,
      medium: 0,
      hard: 0,
    },
    capitals: {
      easy: 0,
      medium: 0,
      hard: 0,
    },
  },
  counter: 0,
  quizLength: 10,
  start: false,
  isAnswerCorrect: false,
  isChecked: false,
  formType: '',
  correctAnswer: '',
  answers: [],
  currentQuestion: {},
  currentAnswer: '',
  time: 0,
  isPasswordCorrect: false,
  user: {},
  isFormReset: false,
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
        level: state.levels[action.level].name,
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
        countriesForQuiz: _.sampleSize(state.countriesByLevel[action.level], 10),
      };

    case types.CHECK_ANSWER:
      return {
        ...state,
        isAnswerCorrect: action.answer === action.correctAnswer,
        isChecked: !state.isChecked,
        points: action.answer === action.correctAnswer ? state.points + 1 : state.points,
      };

    case types.CHANGE_QUESTION:
      return {
        ...state,
        isChecked: !state.isChecked,
        counter: state.counter + 1,
        isAnswerCorrect: false,
        currentQuestion: state.countriesForQuiz[state.counter],
        currentAnswer: '',
      };
    case types.RESET_LEVEL:
      return {
        ...state,
        level: action.level ? action.level : initialState.level,
        counter: initialState.counter,
        points: initialState.points,
        answer: initialState.answer,
        isChecked: initialState.isChecked,
        countriesForQuiz: initialState.countriesForQuiz,
        start: initialState.start,
      };

    case types.RESET_TYPE:
      return {
        ...state,
        quizType: '',
      };

    case types.SET_NEXT_LEVEL:
      return {
        ...state,
        level: state.levels[action.level].next,
      };

    case types.SET_BEST_SCORE:
      return {
        ...state,
        bestScore: {
          ...state.bestScore,
          [action.quizType]: {
            ...state.bestScore[action.quizType],
            [action.level]:
              action.score > state.bestScore[action.quizType][action.level]
                ? action.score
                : state.bestScore[action.quizType][action.level],
          },
        },
      };

    case types.SET_FORM_TYPE:
      return {
        ...state,
        formType: action.formType,
      };

    case types.SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.answer,
      };
    case types.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.question,
        correctAnswer: action.quizType === 'flags' ? action.question.name : action.question.capital,
      };

    case types.SET_ANSWERS:
      return {
        ...state,
        answers: [
          state.currentQuestion,
          ..._.sampleSize(
            state.countries.filter(
              (country) =>
                country.region === state.currentQuestion.region &&
                country !== state.currentQuestion &&
                country.capital !== '',
            ),
            3,
          ),
        ].sort(() => 0.5 - Math.random()),
      };

    case types.START_QUIZ:
      return {
        ...state,
        start: !initialState.start,
      };

    case types.SET_TIME:
      return {
        ...state,
        time: {
          total: action.time,
          minutes: `0${Math.floor((action.time / 60000) % 60)}`.slice(-2) * 1,
          seconds: `0${Math.floor((action.time / 1000) % 60)}`.slice(-2) * 1,
          miliseconds: `0${(action.time / 10) % 100}`.slice(-2) * 1,
        },
      };

    case types.REGISTER_USER:
      return {
        ...state,
        isUserRegistered: action.action,
      };

    case types.CHECK_PASSWORD:
      return {
        ...state,
        isPasswordCorrect: action.isCorrect,
      };

    case types.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case types.SAVE_GAME:
      return {
        ...state,
        user: {
          ...state.user,
          games: [
            ...state.user.games,
            {
              type: state.quizType,
              level: state.level,
              points: state.points,
              time: state.time,
              date: action.date,
              id: action.id,
            },
          ],
          gamesPlayed: state.user.games.length + 1,
          bestScore: {
            ...state.user.bestScore,
            [state.quizType]: {
              ...state.user.bestScore[state.quizType],
              [state.level]: checkIfScoreIsBest(state),
            },
          },
        },
        start: initialState.start,

        // averageScore: state.user.games.length === 0 && 0,
      };

    case types.RESET_FORM:
      return {
        ...state,
        isFormReset: action.isFormReset,
      };

    default:
      return state;
  }
};
export default rootReducer;
