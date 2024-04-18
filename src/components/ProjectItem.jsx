import React from "react";
import { useNavigate } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

const ProjectItem = ({ id, image, name, tech, linkWeb, linkGit }) => {
  //image
  const styleDiv = {
    backgroundImage: `url(${image})`,
  };

  const navigate = useNavigate();
  // console.log('navigate',navigate)

  return (
    <div
      className="projectItem"
      onClick={(event) => {
        // event.preventDefault();
        // navigate("/porto/" + id );
        // window.location.href = "https://mycoder-portofolio.vercel.app/#home"
        // window.open("https://mycoder-portofolio.vercel.app/#home", "_blank");
        // window.open(linkWeb , "_blank")
      }}
    >
      <a href={linkWeb} target="_blank" title="website"rel="noreferrer">
        <div style={styleDiv} className="bgImage" />
      </a>

      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <p>Tech: {tech} </p>
      {/* <a
        href={linkGit}
        title="link Git"
        style={{ padding: "20px", display: "block" }}
        target="_blank"
        rel="noreferrer"
      >
       <GitHub />
      </a> */}
    </div>
  );
};
export default ProjectItem;
