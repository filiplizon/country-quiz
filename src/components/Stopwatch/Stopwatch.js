import React, { useEffect } from 'react';

const Stopwatch = ({ start, setTimeFn, time }) => {
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimeFn((prevTime) => prevTime + 10);
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

export default Stopwatch;
