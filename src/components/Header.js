import React from 'react';
import '../styles/header.css';  // Import the CSS file
import { AiFillHome, AiOutlineUser, AiOutlinePlayCircle, AiOutlineCheckCircle } from 'react-icons/ai';


const Header = () => {
  const links = [
    {
      path: "#",
      text: "Home",
      icon: <AiFillHome />
    },
    {
      path: "#",
      text: "Videos",
      icon: <AiOutlinePlayCircle />
    },
    {
      path: "#",
      text: "Progress",
      icon: <AiOutlineCheckCircle />
    },
    {
      path: "#",
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