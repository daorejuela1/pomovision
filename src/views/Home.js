import React, { useState, useEffect } from 'react';
import '../styles/notfound.css'; // Import the CSS file
import Timer from '../components/Timer';
import TaskContainer from '../components/TaskContainer';
import DelayPicker from '../components/DelayPicker';
/**
 * Renders the Home component with delay settings and timer components.
 *
 * @return {ReactNode} The rendered React component for the Home page.
 */
const Home = () => {
    const [delays, setDelays] = useState(() => {
        return JSON.parse(localStorage.getItem('delays')) || {
        work: 25,
        rest: 5,
        longRest: 15,
    }
      });

      useEffect(() => {
        if(delays) {
        localStorage.setItem('delays', JSON.stringify(delays));
        }
    }, [delays]);

  return (
    <React.Fragment>
    <DelayPicker delays={delays} setDelays={setDelays} />
    <Timer props={{delay: delays.work, category: 'work', autoStart: false}}/>
    <TaskContainer />
    </React.Fragment>

  );
};

export default Home;