import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  console.log( "expandNavbar",expandNavbar);

  const location = useLocation();
  console.log("location",location);

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/portfolio"}>Portfolio</Link>
        <Link to={"/project"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  );
};
export default Navbar;
