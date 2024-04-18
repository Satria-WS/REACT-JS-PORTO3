import React from "react";
import "../styles/Portfolio.css";

import { portoList } from "../helpers/PortoList";
import PortoItem from "../components/PortoItem";
const Portfolio = () => {
  return (
    <div className="projects">
      <h1>My Personal Portfolio</h1>
      <div className="projectList">
        {portoList.map((item , id) => {
          return <PortoItem key={id} id={id} name={item.name} image={item.image} tech={item.tech} linkWeb={item.link.web} linkGit={item.link.git} />;
        })}
      </div>
    </div>
  );
}
export default Portfolio