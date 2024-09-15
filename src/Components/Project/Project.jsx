import React from 'react';
import '../Project/Project.scss';
import projectsInfo from '../../assets/Projects.json';

const Project = () => {
  return (
    <div className="projects" >
      <h1 className='TitleProject'>Mes Projets</h1> 
      <div>
        {projectsInfo.map((project,index) => {
          let link = null;
          if(project.liveLink.localeCompare(project.githubLink) !== 0){ 
            link = <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a> 
          }
          return (
            <div className="project" key={index}>
              <h2 className='TitleProject'>{project.name}</h2>
              <p>{project.desc}</p> <br></br>
              <p>{project.pb}</p>
              <div className="tech-stack">
                {project.techs.map((tech,index) => (
                  <div key={index}>{tech}</div>
                ))} 
              </div>
              <div className="btns">
                {link}
                <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
              </div>
            </div>
          )
        }
        )} 
      </div>
    </div>
  )
}

export default Project;

