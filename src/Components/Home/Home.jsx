import React from 'react';

import '../Home/Home.scss';

import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-scroll';

import { GiButterflyFlower } from 'react-icons/gi';


const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-text">
        <div className='name'>
          <h1 className='gradientText'>
            Gessica Goublet
          </h1>
          <span>
            <div className='flower' alt="flower">
              < GiButterflyFlower />
            </div>
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
            Mon Dossier Artistique
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
