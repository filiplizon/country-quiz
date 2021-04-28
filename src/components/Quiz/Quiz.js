import React, { useEffect } from 'react';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import QuizTemplate from 'templates/QuizTemplate';
import Summary from 'components/Summary/Summary';

const Quiz = ({ setCountriesLevel, level, counter, isChecked }) => {
  useEffect(() => {
    setCountriesLevel();
  }, []);

  return (
    <QuizTemplate>
      {counter === 9 && isChecked ? (
        <Summary />
      ) : (
        <> {level ? <QuestionWrapper /> : <SelectionPanel />}</>
      )}
    </QuizTemplate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
});

const mapStateToProps = (state) => {
  const { level, counter, isChecked } = state;
  return { level, counter, isChecked };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
