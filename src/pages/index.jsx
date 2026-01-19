import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import "./index.css";
import Contact from "../components/Contact";


export default function Index() {
  return (
    <div className="reset-container">
    
        <Home />
        <Projects />
        <About />
        <Contact/>
        
      
    </div>
  );
}