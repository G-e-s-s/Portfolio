import React from 'react';
import { animateScroll } from 'react-scroll';

//icons
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { CgArrowLongUp } from 'react-icons/cg';


import '../Footer/Footer.css';

const Footer = () => {
  return (
    <div className='socials'>
      <h2>Contactez-moi</h2>
      <div className="social">
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/G-e-s-s" target='_blank' rel='noreferrer'>Mes projets</a>
        </div>
        <div className='mail'>
          <AiFillMail />
          <p>Mail</p>
          <a href="mailto:gess_06570@hotmail.fr">M'écrire</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/gessica-goublet/" target='_blank' rel='noreferrer'>M'écrire</a>
        </div>
      </div>
      <div className='arrow' onClick={() => animateScroll.scrollToTop()}><CgArrowLongUp /></div>
      <div><p id='droit'>©2024 Gessica Goublet, Tous droits réservés.</p></div>
  </div>
  )
}

export default Footer