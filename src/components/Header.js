import React from 'react';
import '../styles/header.css';  // Import the CSS file
import { AiFillHome, AiOutlineUser, AiOutlinePlayCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const links = [
    {
      path: navigate('/'),
      text: "Home",
      icon: <AiFillHome />
    },
    {
      path: navigate('/videos'), 
      text: "Videos",
      icon: <AiOutlinePlayCircle />
    },
    {
      path: navigate('/rest'),
      text: "Progress",
      icon: <AiOutlineCheckCircle />
    },
    {
      path: navigate('/about'), 
      text: "About",
      icon: <AiOutlineUser />
    }
  ];

  return (
    <header className="Header">
      <h1>PomoVision</h1>
      <nav>
        <ul>
          {links.map(({ path, text, icon }) => (
            <li className='Header__item' key={path}> <a href={path}> {icon} {text} </a> </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;