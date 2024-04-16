import React from "react";
import "../styles/Portfolio.css";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";
const Portfolio = () => {
  return (
    <div className="projects">
      <h1>My Personal Portfolio</h1>
      <div className="projectList">
        {projectList.map((item , id) => {
          return <ProjectItem key={id} name={item.name} image={item.image} id={id} />;
        })}
      </div>
    </div>
  );
}
export default Portfolio