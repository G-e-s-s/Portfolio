import React from 'react'

import '../../Components/Skills/Skills.scss';

//icons
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiFigma, SiMongodb, SiGithub, SiNotion, SiCanva, SiAdobe, SiSass, SiReactbootstrap } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";

const Skills = () => {
  return (
    <div className='skills'>
      <h2>Mes Compétences</h2>
      <div className="skill">
        <div className="html">
          <SiHtml5 />
          <p>HTML</p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="js">
          <SiJavascript />
          <p>JavaScript </p><div className='star'><RiStarSFill /></div>
        </div>
        <div className="github">
          <SiGithub />
          <p>Github </p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="git">
          <FaGitAlt />
          <p>Git </p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS </p><div className='star'><RiStarSFill /></div>
        </div>
        <div className="react">
          <SiReact />
          <p>React </p><div className='star'><RiStarSFill /></div>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB </p><div className='star'><RiStarSFill /></div>
        </div>
        <div className="fig">
          <SiFigma />
          <p>Figma </p><div className='star'><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="notion">
          <SiNotion />
          <p>Notion </p><div className='star'><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="canva">
          <SiCanva />
          <p>Canva </p><div className='star'><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="adobe">
          <SiAdobe />
          <p>Adobe </p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="Vscode">
          <VscVscode />
          <p>Vscode </p><div className='star'><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="sass">
          <SiSass />
          <p>Sass </p><div className='star'><RiStarSFill /><RiStarSFill /></div>
        </div>
        <div className="bootstrap">
          <SiReactbootstrap />
          <p>Bootstrap </p><div className='star'><RiStarSFill /></div>
        </div>
        <div className="seo">
          <TbSeo />
          <p>SEO </p><div className='star'><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
        </div>
      </div>
    </div>
  )
}

export default Skills;