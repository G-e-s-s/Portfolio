import React from 'react';
import '../Project/Project.css';
import projectsInfo from '../../assets/Projects.json';

const Project = () => {
  return (
    <div className="projects" >
      <h2>Mes Projets</h2> 
      <div>
        {projectsInfo.map((project,index) => (
          <div className="project" key={index}>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <div className="tech-stack">
              {project.techs.map((tech,index) => (
                <div key={index}>{tech}</div>
              ))} 
            </div>
            <div className="btns">
              <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Project;

