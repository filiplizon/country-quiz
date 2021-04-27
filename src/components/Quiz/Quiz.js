import React, { useEffect } from 'react';
import SelectionPanel from 'components/SelectionPanel/SelectionPanel';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import QuestionWrapper from 'components/QuestionWrapper/QuestionWrapper';
import QuizTemplate from 'templates/QuizTemplate';
import Summary from 'components/Summary/Summary';

const Quiz = ({ setCountriesLevel, start, counter, isChecked }) => {
  useEffect(() => {
    setCountriesLevel();
  }, []);

  return (
    <QuizTemplate>
      {counter === 9 && isChecked ? (
        <Summary />
      ) : (
        <> {start ? <QuestionWrapper /> : <SelectionPanel />}</>
      )}
    </QuizTemplate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCountriesLevel: () => dispatch(actions.setCountriesLevel()),
});

const mapStateToProps = (state) => {
  const { start, counter, isChecked } = state;
  return { start, counter, isChecked };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
