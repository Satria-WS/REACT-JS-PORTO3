import React from "react";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import "../styles/Home.css";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi Hello world , my name tole</h2>
        <div className="prompt">
          <p>
            A software developer gak niat passion want to leaving job and
            nganggur
          </p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ul className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
