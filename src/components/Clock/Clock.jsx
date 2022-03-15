import useClock from 'Hooks/useClock';
import React from 'react';



function Clock(props) {
  const { timerString } = useClock();

  return (
    <div>
      <h1>Clock</h1>
      <p
        style={{ fontSize: 30, color: 'deepskyblue', fontWeight: 'bold' }}
      >
        {timerString}
      </p>
      <p
        style={{ fontSize: 30, color: 'deeppink', fontWeight: 'bold' }}
      >
        {timerString}
      </p>
    </div>
  );
}

Clock.propTypes = {};

export default Clock;
