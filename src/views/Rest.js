import React, { useState, useEffect } from 'react';
import '../styles/notfound.css'; // Import the CSS file
import Timer from '../components/Timer';
import Video from '../components/Video';
/**
 * Renders the Rest component which handles pomodoro timer functionality.
 *
 * @return {JSX.Element} The React component rendering the pomodoro timer and video components.
 */
const Rest = () => {

  const [delays] = useState(() => {
    return JSON.parse(localStorage.getItem('delays')) || {
      work: 25,
      rest: 5,
      longRest: 15,
    }
  });

  let [restCounter, setRestCounter] = useState(() => {
    return JSON.parse(localStorage.getItem('restCounter')) || 0
  });

  useEffect(() => {
    localStorage.setItem('restCounter', restCounter);
  }, [restCounter]);



  function handleRestPomodoroComplete() {
    // Increment the count of completed work pomodoros
    restCounter += 1;
    localStorage.setItem('restCounter', restCounter);
    setRestCounter(restCounter);
  };

  let delay, category;
  if (restCounter % 3 === 0) {
    delay = delays.longRest;
    category = 'longRest';
  } else {
    delay = delays.rest;
    category = 'rest';
  }

  return (
    <React.Fragment>
    <Timer props={{delay: delay, category: category, autoStart: true, onTimerComplete: handleRestPomodoroComplete}}/>
    <Video/>
    </React.Fragment>

  );
};

export default Rest;