import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name , id }) => {
  //image
  const styleDiv = {
    backgroundImage: `url(${image})`,
  };

  const navigate = useNavigate();
  // console.log('navigate',navigate)

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id );
      }}
    >
      <div style={styleDiv} className="bgImage" />
      <h1>{name}</h1>
      <div>ProjectItem</div>
    </div>
  );
};
export default ProjectItem;
