import React from 'react';
import '../styles/timer.css';
import { useTimer } from 'react-timer-hook';



function formatTime(time) {
    time = String(time);
    time = time.padStart(2, "0");
    return time;
  }

function setTime(delay = 30) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + delay)
    return time
}

function Timer({ props }) {
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ autoStart: false,
    expiryTimestamp: setTime(props.delay),
    onExpire: () => console.warn('onExpire called')
});

const buttonsData = [
    { text: 'Start', onClick: resume},
    { text: 'Pause', onClick: pause },
    { text: 'Restart', onClick: () => restart(setTime(props.delay)) },
  ];

  return (
    <div className={`Timer Timer--${props.category}`}>
      <div className='Timer__display'>
       <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
      <p className='Timer__text'>{isRunning ? 'Start working!' : 'Get ready to work'}</p>
      {buttonsData.map(( {text, onClick}) => (
        <button className='Timer__button' onClick={onClick}>{text}</button>
      ))}
    </div>
  );
}

export default Timer;