import React from "react";
import { useParams } from "react-router-dom";
import { portoList } from "../helpers/PortoList";
import "../styles/ProjectDisplay.css";
import { GitHub } from "@material-ui/icons";

const PortoDisplay = () => {
  // const { id } = useParams();
  // const project = projectList[id]

  const params = useParams();
  const project = portoList[params.id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b>Tech:</b> {project.tech}
      </p>
      <p>
        {/* <GitHub /> */}
        Link: GITHUB
      </p>
    </div>
  );
};
export default PortoDisplay;
