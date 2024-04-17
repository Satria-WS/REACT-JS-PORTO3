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
          return <PortoItem key={id} name={item.name} image={item.image} id={id} />;
        })}
      </div>
    </div>
  );
}
export default Portfolio