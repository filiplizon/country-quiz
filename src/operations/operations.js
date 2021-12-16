import actions from 'actions/actions';

const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v2/all'); // eslint-disable-line
  const json = await response.json();
  return json;
};

export const getAllCountries = () => async (dispatch) => {
  const countries = await fetchCountries();
  dispatch(actions.fetch(countries));
};

export const isAnswerCorrect = (state) => {
  let isCorrect;
  switch (state.quizType) {
    case 'flags':
      isCorrect =
        state.answer.toLowerCase() === state.countriesForQuiz[state.counter].name.toLowerCase();
      break;
    case 'capitals':
      isCorrect =
        state.answer.toLowerCase() === state.countriesForQuiz[state.counter].capital.toLowerCase();
      break;
    default:
      return;
  }
  return isCorrect; // eslint-disable-line
};

export const checkIfScoreIsBest = (state) => {
  const isMorePoints = state.points > state.user.bestScore[state.quizType][state.level].points;
  const isPointsEqual = state.points === state.user.bestScore[state.quizType][state.level].points;
  const isTimeFaster =
    state.time.total <= state.user.bestScore[state.quizType][state.level].time.total;

  const setMinutes = (time) => `0${Math.floor((time / 60000) % 60)}`.slice(-2) * 1;
  const setSeconds = (time) => `0${Math.floor((time / 1000) % 60)}`.slice(-2) * 1;
  const setMiliseconds = (time) => `0${(time / 10) % 100}`.slice(-2) * 1;

  const isBetterScore = isMorePoints // eslint-disable-line
    ? {
        total: state.time.total,
        minutes: setMinutes(state.time.total),
        seconds: setSeconds(state.time.total),
        miliseconds: setMiliseconds(state.time.total),
      }
    : isPointsEqual && isTimeFaster
    ? {
        total: state.time.total,
        minutes: setMinutes(state.time.total),
        seconds: setSeconds(state.time.total),
        miliseconds: setMiliseconds(state.time.total),
      }
    : {
        total: state.user.bestScore[state.quizType][state.level].time.total,
        minutes: setMinutes(state.user.bestScore[state.quizType][state.level].time.total),
        seconds: setSeconds(state.user.bestScore[state.quizType][state.level].time.total),
        miliseconds: setMiliseconds(state.user.bestScore[state.quizType][state.level].time.total),
      };

  return {
    ...state.user.bestScore[state.level],
    points: isMorePoints ? state.points : state.user.bestScore[state.quizType][state.level].points,
    time: isBetterScore,
  };
};
