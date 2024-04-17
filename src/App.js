import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Portfolio from "./pages/Portfolio";
import PortoDisplay from "./pages/PortoDisplay";

function App() {
  return (
    <div className=" App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/porto/:id" element={<PortoDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
