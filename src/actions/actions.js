import types from './types';

const fetch = (countries) => ({
  type: types.FETCH_COUNTRIES,
  countries,
});

const setCountriesLevel = () => ({
  type: types.SET_COUNTRIES_LEVEL,
});

const chooseType = (quizType) => ({
  type: types.CHOOSE_TYPE,
  quizType,
});

const chooseLevel = (level) => ({
  type: types.CHOOSE_LEVEL,
  level,
});

const setQuizQuestions = (level) => ({
  type: types.SET_QUIZ_QUESTOINS,
  level,
});

const setAnswer = (answer) => ({
  type: types.SET_ANSWER,
  answer,
});

const checkAnswer = (answer, correctAnswer) => ({
  type: types.CHECK_ANSWER,
  answer,
  correctAnswer,
});

const changeQuestion = () => ({
  type: types.CHANGE_QUESTION,
});

const resetLevel = (level) => ({
  type: types.RESET_LEVEL,
  level,
});

const resetType = () => ({
  type: types.RESET_TYPE,
});

const setNextLevel = (level) => ({
  type: types.SET_NEXT_LEVEL,
  level,
});

const setBestScore = (score, level, quizType) => ({
  type: types.SET_BEST_SCORE,
  score,
  level,
  quizType,
});

export default {
  fetch,
  chooseType,
  chooseLevel,
  setCountriesLevel,
  setQuizQuestions,
  setAnswer,
  checkAnswer,
  changeQuestion,
  resetLevel,
  resetType,
  setNextLevel,
  setBestScore,
};
