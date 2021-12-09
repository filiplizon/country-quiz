import React from 'react';
import { connect } from 'react-redux';
import QuizTemplate from 'templates/QuizTemplate';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import Summary from 'components/Summary/Summary';

const Quiz = ({ countriesForQuiz, counter }) => (
  <QuizTemplate>
    {counter === 10 ? (
      <Summary />
    ) : (
      <>{countriesForQuiz.length ? <QuestionWrapper /> : <SelectionPanel />}</>
    )}
  </QuizTemplate>
);

const mapStateToProps = (state) => {
  const { level, counter, isChecked, countriesForQuiz, start } = state;
  return { level, counter, isChecked, countriesForQuiz, start };
};

export default connect(mapStateToProps)(Quiz);
