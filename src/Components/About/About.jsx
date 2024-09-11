import React from 'react'

import '../About/About.css'

const About = () => {
  // const calculate_age = () => {
  //   var today = new Date();
  //   var birthDate = new Date("2000-03-28");
  //   var age_now = today.getFullYear() - birthDate.getFullYear();
  //   var m = today.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //     age_now--;
  //   }
  //   return age_now;
  // }
  return (
    <div className='about' >
      <h2 id="about">À propos de moi</h2>
      <div className="words">
      Je suis passionnée par le développement front-end et le web design, étant sensibilisé à l'expérience utilisateur et l'accessibilité, je développe des projets centré autour de l'Humain. <br></br>
      De plus, je suis intéressé par le monde du graphisme.
      </div>
    </div>
  )
}
export default About;
