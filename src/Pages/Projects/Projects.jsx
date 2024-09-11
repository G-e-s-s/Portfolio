import React from "react";
import Project from "../../Components/Project/Project";
import "../Projects/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Project 1",
      desc: "congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["HTML", "CSS", "TypeScript"],
      isOpenSource: true,
    },
    {
      name: "Project 2",
      desc: "congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" >
      <h2 id="projects">My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
