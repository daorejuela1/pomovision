import React from 'react';
import '../styles/header.css';  // Import the CSS file
import { AiFillHome, AiOutlineUser, AiOutlinePlayCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";


const Header = () => {
  const links = [
    {
      path: '/',
      text: "Home",
      icon: <AiFillHome />
    },
    {
      path: '/videos', 
      text: "Videos",
      icon: <AiOutlinePlayCircle />
    },
    {
      path: '/rest',
      text: "Progress",
      icon: <AiOutlineCheckCircle />
    },
    {
      path: '/about', 
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
            <Link to={path} key={text}>
                <li className='Header__item'> {icon}  {text} </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;