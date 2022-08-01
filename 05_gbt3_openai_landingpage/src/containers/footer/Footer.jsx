import React from 'react';
import './Footer.css';

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo' />
          <address>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</address>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get in touch</h4>
          <address>Crechterwoord K12 182 DK Alknjkcb</address>
          <address>085-132567</address>
          <a href='mailto:info@payme.net'>info@payme.net</a>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;