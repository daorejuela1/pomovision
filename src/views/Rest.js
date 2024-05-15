import React from 'react';
import '../styles/notfound.css'; // Import the CSS file
import Timer from '../components/Timer';
const Rest = () => {
  return (
    <React.Fragment>
    <Timer props={{delay: 10, category: 'rest'}}/>
    </React.Fragment>

  );
};

export default Rest;