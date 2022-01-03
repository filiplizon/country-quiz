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

const changeQuestion = (counter) => ({
  type: types.CHANGE_QUESTION,
  counter,
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

const setFormType = (formType) => ({
  type: types.SET_FORM_TYPE,
  formType,
});

const setCurrentAnswer = (answer) => ({
  type: types.SET_CURRENT_ANSWER,
  answer,
});

const setAnswers = () => ({
  type: types.SET_ANSWERS,
});
const setCurrentQuestion = (question, quizType) => ({
  type: types.SET_CURRENT_QUESTION,
  question,
  quizType,
});

const startQuiz = () => ({
  type: types.START_QUIZ,
});

const setTime = (time) => ({
  type: types.SET_TIME,
  time,
});

const registerUser = (action) => ({
  type: types.REGISTER_USER,
  action,
});
const checkPassword = (isCorrect) => ({
  type: types.CHECK_PASSWORD,
  isCorrect,
});
const setUser = (user) => ({
  type: types.SET_USER,
  user,
});

const saveGame = (date, id) => ({
  type: types.SAVE_GAME,
  date,
  id,
});

const resetForm = (isFormReset) => ({
  type: types.RESET_FORM,
  isFormReset,
});

const setPlayerToDisplay = (playerToDisplay) => ({
  type: types.SET_PLAYER_TO_DISPLAY,
  playerToDisplay,
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
  setFormType,
  setAnswers,
  startQuiz,
  setCurrentQuestion,
  setCurrentAnswer,
  setTime,
  registerUser,
  checkPassword,
  setUser,
  saveGame,
  resetForm,
  setPlayerToDisplay,
};
