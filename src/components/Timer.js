import React, { useState } from 'react';
import '../styles/timer.css';
import { useTimer } from 'react-timer-hook';
import { useNavigate } from "react-router-dom";
import BodyButton from './BodyButton';
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
  const navigate = useNavigate();
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ autoStart: props.autoStart,
    expiryTimestamp: setTime(props.delay),
    onExpire: () => props.category === 'work' ? navigate('/rest') : navigate('/')
});

const [videoList] = useState(() => {
    return JSON.parse(localStorage.getItem('videos')) || []
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
      { videoList.length > 0 ? buttonsData.map(( {text, onClick}) => (
        <button key={text} className='Timer__button' onClick={onClick} >{text}</button>
      ))
      :
      <BodyButton text="Add some videos to watch in your resting time" path="/videos"/>        
      }
    </div>
  );
}

export default Timer;