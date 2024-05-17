import React, { useState } from 'react';
import '../styles/delaypicker.css';
const DelayPicker = ({ delays, setDelays }) => {
  const [pomodoroWork, setPomodoroWork] = useState(delays.work);
  const [pomodoroRest, setPomodoroRest] = useState(delays.rest);
  const [pomodoroLongRest, setPomodoroLongRest] = useState(delays.longRest);

  const handleInputChange = (event, setDelay) => {
    setDelay(event.target.value);
  };

  const handleButtonClick = () => {
    const workDelay = parseInt(pomodoroWork, 10);
    const restDelay = parseInt(pomodoroRest, 10);
    const longRestDelay = parseInt(pomodoroLongRest, 10);

    if (!isNaN(workDelay) && !isNaN(restDelay) && !isNaN(longRestDelay)) {
      setDelays({
        work: workDelay,
        rest: restDelay,
        longRest: longRestDelay,
      });
    }
  };

  return (
    <div className="DelayPicker">
      <div><label>Work:</label>
        <input 
          type="number" 
          value={pomodoroWork} 
          onChange={(event) => handleInputChange(event, setPomodoroWork)} 
        />
      </div>
      <div>
      <label>Rest:</label>
        <input 
          type="number" 
          value={pomodoroRest} 
          onChange={(event) => handleInputChange(event, setPomodoroRest)} 
        />
      </div>
      <div><label>Long rest:</label>
        <input 
          type="number" 
          value={pomodoroLongRest} 
          onChange={(event) => handleInputChange(event, setPomodoroLongRest)} 
        />
      </div>
      <button onClick={handleButtonClick}>Set Delays (min)</button>
    </div>
  );
};

export default DelayPicker;