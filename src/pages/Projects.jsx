import React from "react";
import "../styles/Project.css";
import ProjectItem from "../components/ProjectItem";

import "../styles/Project.css";
import { projectList } from "../helpers/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((item , id) => {
          return <ProjectItem key={id} name={item.name} image={item.image} id={id} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
