import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectPortfolio from "./pages/projects/ProjectPortfolio"
import ProjectAQM from "./pages/projects/ProjectAQM"
import ProjectAsservissement from "./pages/projects/ProjectAsservissement";
import ProjectAmplification from "./pages/projects/ProjectAmplificationFiltrage";
import ProjectMeteo from "./pages/projects/ProjectMeteo";
import ProjectTourelle from "./pages/projects/ProjectTourelle";
import ProjectRobotCrabe from "./pages/projects/ProjectRobotCrabe";
import ProjectDeclencheur from "./pages/projects/ProjectDeclencheur";
import ProjectDecors from "./pages/projects/ProjectDecors";


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
        <Route path="/projects/asservissement" element={<ProjectAsservissement />} />
        <Route path="/projects/amplification" element={<ProjectAmplification />} />
        <Route path="/projects/meteo" element={<ProjectMeteo />} />
        <Route path="/projects/tourrelle" element={<ProjectTourelle />} />
        <Route path="/projects/crabe" element={<ProjectRobotCrabe />} />
        <Route path="/projects/argentique" element={<ProjectDeclencheur />} />
        <Route path="/projects/decors" element={<ProjectDecors />} />
      </Routes>
    </BrowserRouter>
  );
}
