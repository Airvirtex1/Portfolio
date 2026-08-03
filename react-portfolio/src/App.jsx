import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

// Mode édition : `import.meta.env.DEV` est remplacé par `false` au build,
// l'import dynamique est alors éliminé — /admin n'existe pas en production.
const Admin = import.meta.env.DEV ? lazy(() => import("./admin/Admin")) : null;

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/entreprise" element={<ProjectDetail id="entreprise" />} />
        <Route path="/contact" element={<Contact />} />
        {Admin && (
          <Route
            path="/admin"
            element={
              <Suspense fallback={null}>
                <Admin />
              </Suspense>
            }
          />
        )}
      </Routes>
      </div>
    </BrowserRouter>
  );
}
