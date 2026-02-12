import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectPortfolio from "./pages/ProjectPortfolio"
import ProjectAQM from "./pages/ProjectAQM"


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/portfolio" element={<ProjectPortfolio />} />
        <Route path="/projects/boitier-aqm" element={<ProjectAQM />} />
      </Routes>
    </BrowserRouter>
  );
}
