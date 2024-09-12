import '../src/assets/styles/App.css';

import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About';
import Skills from './Pages/Skills/Skills';
import Timeline from './Components/TimeLine/Timeline';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return ( 
    <div className={`App ${!isDarkMode ?'light' : ''}`}>
      <div>
        <Header isDarkMode={isDarkMode} handleToggle={toggleTheme} />
        <Home />
        <Fade fraction={.3} triggerOnce>
          <About />
        </Fade>
      </div>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.3} triggerOnce>
          <Skills />
        </Fade>
        <Fade fraction={.3} triggerOnce>
          <Project />
        </Fade>
      </div>
      <div>
        <Fade fraction={.3} triggerOnce>
          <Timeline />
        </Fade>
      </div>
      <div className={`dark ${!isDarkMode ?'light' : ''}`}>
        <Fade fraction={.3} triggerOnce>
          <Footer />
        </Fade>
      </div>
    </div>
  );
}

export default App;