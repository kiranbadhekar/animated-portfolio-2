import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Navbar";
import OceanFooter from "./components/Footer";
import Index from "./pages";

import AuroraSky from "./components/background";







function App() {
  return (
    <Router>
 
    
   <AuroraSky/>
      <Nav/>

  
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer with ocean animation + contact form */}
      <OceanFooter/>
    </Router>
  );
}

export default App;
