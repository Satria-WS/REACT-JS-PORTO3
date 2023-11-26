import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import { GitHub } from "@material-ui/icons";

const ProjectDisplay = () => {
  // const { id } = useParams();
  // const project = projectList[id]

  const params = useParams();
  const project = projectList[params.id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <GitHub />
      </p>
    </div>
  );
};
export default ProjectDisplay;
