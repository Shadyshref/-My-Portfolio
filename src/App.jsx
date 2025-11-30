import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Projects from "./components/Projects";
import SkillSection from "./components/SkillSection";
import TechnicalSkills from "./components/TechnicalSkills";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Aboutme/>
      <Services/>
      <Projects/>
      <TechnicalSkills/>
      < Footer/>
    </>
  );
}

export default App;
