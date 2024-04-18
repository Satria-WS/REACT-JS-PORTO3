import React from "react";
import { useNavigate } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

const PortoItem = ({ image, name , id , tech }) => {
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
        // navigate("/porto/" + id );
        // window.location.href = "https://mycoder-portofolio.vercel.app/#home"
        window.open("https://mycoder-portofolio.vercel.app/#home","_blank")
      }}
    >
      <div style={styleDiv} className="bgImage" />
      <h1 style={{marginBottom:"10px"}}>{name}</h1>
      {/* <div>Tech: React , materialui , css , node</div> */}
      <p >Tech: {tech} </p>
      <p style={{padding:"20px"}}><GitHub/></p>
    </div>
  );
};
export default PortoItem;
