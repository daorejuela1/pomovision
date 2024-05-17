import { Link } from "react-router-dom";
import '../styles/bodybutton.css';

const BodyButton = ({text, path}) => {
    return (
        <Link to={path}> <button className="BodyButton"> {text} </button></Link>
    );
};

export default BodyButton;