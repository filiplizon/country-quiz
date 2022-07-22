import React from 'react';
import { connect } from 'react-redux';
import Paragraph from 'components/Paragraph/Paragraph';
import Stopwatch from 'components/Stopwatch/Stopwatch';
import { StyledPointBox } from './PointBox.styles';

const PointBox = ({ level, counter, quizLength, points, start, setTimeFn, time }) => (
  <StyledPointBox>
    {' '}
    <Paragraph>Level: {level}</Paragraph>
    <Paragraph>
      Question: {counter + 1} / {quizLength}
    </Paragraph>
    <Paragraph>
      Points: {points} / {quizLength}
    </Paragraph>
    <Paragraph>
      Time: <Stopwatch setTimeFn={setTimeFn} start={start} time={time} />
    </Paragraph>
  </StyledPointBox>
);

const mapStateToProps = (state) => {
  const { level, counter, quizLength, points, start } = state;
  return {
    level,
    counter,
    quizLength,
    points,
    start,
  };
};

export default connect(mapStateToProps)(PointBox);
