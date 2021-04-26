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

const setQuizQuestions = (countries, level) => ({
  type: types.SET_QUIZ_QUESTOINS,
  countries,
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

const finishQuiz = () => ({
  type: types.FINISH_QUIZ,
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
  finishQuiz,
};
