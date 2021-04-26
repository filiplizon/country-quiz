import React, { useEffect } from 'react';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import QuizTemplate from 'templates/QuizTemplate';

const Quiz = ({ setCountriesLevel, start }) => {
  useEffect(() => {
    setCountriesLevel();
  }, []);

  return <QuizTemplate> {start ? <QuestionWrapper /> : <SelectionPanel />}</QuizTemplate>;
};

const mapDispatchToProps = (dispatch) => ({
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
});

const mapStateToProps = (state) => {
  const { quizType, start } = state;
  return { quizType, start };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
