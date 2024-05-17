import React from 'react';
import '../styles/notfound.css'; // Import the CSS file
import Timer from '../components/Timer';
import Video from '../components/Video';
const Rest = () => {
  return (
    <React.Fragment>
    <Timer props={{delay: 10, category: 'rest', autoStart: true}}/>
    <Video/>
    </React.Fragment>

  );
};

export default Rest;