import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProjectsSection from "./Components/HomeComponents/ProjectsSection/ProjectsSection";
import Navbar from "./Layouts/Navbar/Navbar";
import Footer from "./Layouts/Footer/Footer";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import InsydeCard from "./Components/InsydeCard/InsydeCard";

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const path = location.pathname;
    let route = "home";
    if (path === "/project") route = "projects";
    else if (path.startsWith("/project/")) route = "detail";
    else if (path === "/contact") route = "contact";
    document.body.dataset.route = route;
  }, [location.pathname]);
  return null;
}

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectsSection />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <InsydeCard />
    </BrowserRouter>
  );
}

export default App;
