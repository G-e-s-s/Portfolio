import './styles/App.css';

import { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

// components
import Home from './Pages/Home/Home';
import Nav from './Components/Header/Header';
import Projects from './Pages/Projects/Projects'
import Socials from './Components/Socials';
import About from './Components/About/About';
import Skills from './Components/Skills';

// icon
import { CgArrowLongUp } from 'react-icons/cg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return ( 
    <div className={`App ${!isDarkMode ?'light' : ''}`}>
      <div>
        <Nav isDarkMode={isDarkMode} handleToggle={toggleTheme} />
          <Home />
        <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
      </div>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.2} triggerOnce>
          <Skills />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
      </div>
      <div>
        <Fade fraction={.2} triggerOnce>
          <Socials />
        </Fade>
      </div>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.2} triggerOnce>
          <p>Merci 💘</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;