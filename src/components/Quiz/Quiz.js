import React from 'react';
import { connect } from 'react-redux';
import QuizTemplate from 'templates/QuizTemplate';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import Summary from 'components/Summary/Summary';

const Quiz = ({ level, counter, isChecked }) => (
  <QuizTemplate>
    {counter === 9 && isChecked ? (
      <Summary />
    ) : (
      <>{level ? <QuestionWrapper /> : <SelectionPanel />}</>
    )}
  </QuizTemplate>
);

const mapStateToProps = (state) => {
  const { level, counter, isChecked } = state;
  return { level, counter, isChecked };
};

export default connect(mapStateToProps)(Quiz);
