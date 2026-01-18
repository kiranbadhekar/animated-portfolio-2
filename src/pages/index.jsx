import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./index.css";


export default function Index() {
  return (
    <div className="reset-container">
    
        <Home />
        <Projects />
        <About />
        
      
    </div>
  );
}