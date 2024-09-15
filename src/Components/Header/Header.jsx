import React, { useState } from 'react'

import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photoProfil from "../../assets/Gessica_Goublet.webp"

import '../Header/Header.css'

const Nav = ({ isDarkMode, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const nav =
    <ul style={{ pointerEvents: 'auto' }}>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
        A propos
      </Link></li>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
        Projets
      </Link></li>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="socials" spy={true} smooth={true} offset={0} duration={500}>
        Contact
      </Link></li>
      <li><a className='cv' href='https://acrobat.adobe.com/id/urn:aaid:sc:EU:5c22772a-a6db-41be-b00e-39628b29a75a' target='_blank' rel='noreferrer'>
        CV
      </a></li>
    </ul>

  return (
    <div className='nav'>
      <div className={`header ${!isDarkMode ?'light' : ''}`}>
        <h1>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={photoProfil} className='roundedCircle' alt="Developper (myself)"/>
                </Col>
              </Row>
            </Container>          
        </h1>
        <div className="menu-and-theme">
          <div onClick={handleClick} className="menu">
            <GiHamburgerMenu />
          </div>
          <div className='large'>
            {nav}
          </div>
          <div className={`theme-switch ${!isDarkMode ?'light' : ''}`} onClick={handleToggle} >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
      <div className='small' style={{
        display: isOpen ? 'none' : 'flex'
      }}>
        {nav}
      </div>
    </div>
  )
}

export default Nav;

