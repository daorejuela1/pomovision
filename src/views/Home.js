import React from 'react';
import '../styles/notfound.css'; // Import the CSS file
import Timer from '../components/Timer';
import TaskContainer from '../components/TaskContainer';
const Home = () => {
  return (
    <React.Fragment>
    <Timer props={{delay: 25 * 60, category: 'work'}}/>
    <TaskContainer />
    </React.Fragment>

  );
};

export default Home;