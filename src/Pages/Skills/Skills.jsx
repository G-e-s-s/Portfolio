import React from 'react'

import '../Skills/Skills.css'

import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiFigma, SiMongodb, SiGithub, SiNotion, SiCanva, SiAdobe } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="github">
          <SiGithub />
          <p>Github</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
                <div className="fig">
          <SiFigma />
          <p>Figma</p>
        </div>
        <div className="notion">
          <SiNotion />
          <p>Notion</p>
        </div>
        <div className="canva">
          <SiCanva />
          <p>Canva</p>
        </div>
        <div className="adobe">
          <SiAdobe />
          <p>Adobe</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;