import React, { useState, useRef } from 'react';

import '../Home/Home.scss';

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { Link } from 'react-scroll';

import { GiButterflyFlower } from 'react-icons/gi';


const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Bonjour', "Vous m'avez trouvé", 'Bienvenue sur mon portfolio', 'Contactez moi'];
  const textContent = useRef();

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
        <div className='name'>
          <h1 className='gradientText'>
            Gessica Goublet
          </h1>
          <span>
            <span onClick={handleChange}>
            <div className='flower' alt="flower">
              < GiButterflyFlower />
            </div>
            </span>
            <p ref={textContent} style={{ display: 'none' }} className="textFlower">
              Bonjour
            </p>
          </span>
        </div>
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
            Contactez-moi
          </Link>
          <a className='btn2' href='https://www.canva.com/design/DAFD7wMUL-8/UamjcRgbfVMmZpq9JnYR0w/view?utm_content=DAFD7wMUL-8&utm_campaign=designshare&utm_medium=link&utm_source=editor' target='_blank' rel='noreferrer'>
            Dossier artistique
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
