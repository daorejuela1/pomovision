import '../styles/notfound.css'; // Import the CSS file
import tomatoNotFound from '../assets/tomato.jpeg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Uh oh! code 404 Tomato Timer Lost in Time!</h1>
      <img src={tomatoNotFound} alt="Lost Tomato Timer" />  {/* Replace with lost tomato GIF */}
      <p>
        Looks like your Pomodoro session has taken a detour into the time vortex. Fear not, fellow timebender! 
        This lost tomato is probably just enjoying a well-deserved break in a parallel dimension. 
        Why not take a break yourself and come back when you're ready to focus again? 
      </p>
      <Link to='/'> Return Home </Link>
    </div>
  );
};

export default NotFound;