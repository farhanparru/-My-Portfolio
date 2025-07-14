import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navabar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-uaeSand text-uaeNavy"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Hero darkMode={darkMode} />
       <Projects darkMode={darkMode}/>
       <Skill darkMode={darkMode}/>
       <Contact darkMode={darkMode}/>
       <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;