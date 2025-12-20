import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Volunteering from "./pages/Volunteering";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
