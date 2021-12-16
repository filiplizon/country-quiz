import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';

const Stopwatch = ({ start, setTime }) => {
  const [time, setTimer] = useState(0);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
        setTime(time);
      }, 10);
    } else if (!start) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, time]);

  return (
    <>
      <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:</span>
      <span>{`0${(time / 10) % 100}`.slice(-2)}</span>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setTime: (time) => dispatch(actions.setTime(time)),
});

export default connect(null, mapDispatchToProps)(Stopwatch);
