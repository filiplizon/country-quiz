import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Paragraph from 'components/Paragraph/Paragraph';
import Stopwatch from 'components/Stopwatch/Stopwatch';

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

const StyledPointBox = styled.div`
  position: fixed;
  top: 20%;
  right: 20px;
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (max-height: 600px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media (min-width: 1100px) {
    top: 20%;
    right: 10%;
    font-size: ${({ theme }) => theme.fontSize.s};
    background-color: #fff;
    z-index: 1000;
  }

  @media (min-width: 1600px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

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
