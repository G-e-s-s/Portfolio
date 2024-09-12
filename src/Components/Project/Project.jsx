import React from 'react';
import '../Project/Project.css';
import projectsInfo from '../../assets/Projects.json';
// import "../../Pages/Projects/Projects.css";

const Project = () => {
  console.log(projectsInfo);
  return (
    <div className="projects" >
      <h2>My Projects</h2> 
      <div>
      {projectsInfo.map((project) => (
        <div className="project">
          <h2>{project.name}</h2>
          <p>{project.desc}</p>
          <div className="tech-stack">
            {project.techs.map((tech) => (
              <div>{tech}</div>
            ))} 
          </div>
          <div className="btns">
            <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
            <a href={project.githubLink} target="_blank" rel="noreferrer">Github</a>
          </div>
          {project.isOpenSource && <div className="open">Open Source</div>}
          </div>
      ))} 
      </div>
      
    </div>
  )
}

export default Project;

