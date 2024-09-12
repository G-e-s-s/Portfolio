import React from 'react';
import '../Project/Project.css';
import projectsInfo from '../../assets/Projects.json';
// import "../../Pages/Projects/Projects.css";

const Project = () => {
  return (
    <div className="projects" >
      <h2>My Projects</h2> 
      <div className="project">
          <h2>{projectsInfo.name}</h2>
          <p>{projectsInfo.desc}</p>
        <div className="tech-stack">
          {projectsInfo.techs} 
        </div>
        <div className="btns">
          <a href={projectsInfo.liveLink} target="_blank" rel="noreferrer">Live</a>
          <a href={projectsInfo.githubLink} target="_blank" rel="noreferrer">Github</a>
        </div>
        {projectsInfo.isOpenSource && <div className="open">Open Source</div>}
      </div>  
    </div>
  )
}

export default Project;

