import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
          <img className="logo-img-footer" src={require('../../assets/logolight1.png')} alt="Logo" />
            <p className='footer-text'>Created by Abdul Haady</p>
        </div>
    </footer>
  );
}

export default Footer;