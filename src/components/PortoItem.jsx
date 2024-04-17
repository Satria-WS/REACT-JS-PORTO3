import React from "react";
import { useNavigate } from "react-router-dom";

const PortoItem = ({ image, name , id }) => {
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
        navigate("/porto/" + id );
      }}
    >
      <div style={styleDiv} className="bgImage" />
      <h1>{name}</h1>
      <div>Tech: React</div>
    </div>
  );
};
export default PortoItem;
