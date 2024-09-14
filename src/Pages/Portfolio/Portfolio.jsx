import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Home from '../../Components/Home/Home'
import Project from '../../Components/Project/Project';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Timeline from '../../Components/TimeLine/Timeline';

function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return ( 
    <div className={`App ${!isDarkMode ?'light' : ''}`}>
      {<Header isDarkMode={isDarkMode} handleToggle={toggleTheme}/>}
          {<Home/>}
        <Fade fraction={.3} triggerOnce>
          {<About/>}
        </Fade>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.3} triggerOnce>
          {<Skills/>}
        </Fade>
        <Fade fraction={.3} triggerOnce>
          {<Project/>}
        </Fade>
      </div>
      <div>
        <Fade fraction={.3} triggerOnce>
          {<Timeline/>}
        </Fade>
      </div>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.3} triggerOnce>
          {<Footer/>}
        </Fade>
      </div>
    </div>
  );
}

export default Portfolio;