import React from 'react';
import './../styles/footer.css';
import { AiFillGithub, AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="Footer">
      <p className="Footer__copyright"> © {year} Made with <AiFillHeart /> by <a className="Footer__github-link" href="https://github.com/daorejuela1"> <AiFillGithub /> daorejuela1 </a>
      </p>
    </footer>
  );
};

export default Footer;