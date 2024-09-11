import React, { useState, useRef } from 'react'

import '../Home/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
// import { saveAs } from "file-saver";
import { Link } from 'react-scroll';

const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Bonjour', "Vous m'avez trouvé", 'Bienvenue sur mon portfolio', 'Contactez moi', 'Enjoy'];
  const textContent = useRef();
  // const handleDownload = () => {
  //   saveAs(
  //     "google drive url",
  //     "Resume.pdf"
  //   )
  // }

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      setTimeout(() => {
        textContent.current.style.display = 'none'
        animateScroll.scrollTo(350)
        setNumber(1)
      }, 1000);
    }
  }


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Gessica Goublet
          </span>
          <span>
            <span onClick={handleChange}>
            🌸
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              Bonjour
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Développeur web',
            "Passionnée par le développement web et l'UI/UX design"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
            Hire Me
          </Link>
          {/* <div onClick={handleDownload} className='btn2'>View Resume</div> */}
        </div>
      </div>
    </div>
  )
}

export default Home;
