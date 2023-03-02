import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";

import LineGradient from "./components/LineGradient";

import Footer from "./scenes/Footer";
import Contact from "./scenes/Contact";
import Testimonials from "./scenes/Testimonials";
import Projects from "./scenes/Projects";
import MySkills from "./scenes/MySkills";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import NavBar from "./scenes/NavBar";

function App() {

  // state to determine the page viewed
  const [ selectedPage, setSelectedPage ] = useState("home");
  const [ isTopOfPage, setIsTopOfPage ] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    // if window has scrolled down, enact setIsTopPage to false to change color
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <NavBar 
        isTopOfPage = { isTopOfPage }
        selectedPage = { selectedPage }
        setSelectedPage = { setSelectedPage }
      />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreens && (
          <DotGroup 
            selectedPage = { selectedPage }
            setSelectedPage = { setSelectedPage }
          />  
        )}

        {/* LANDING PAGE */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={ setSelectedPage } />
        </motion.div>
      </div>
      <LineGradient />

      {/* MY SKILLS */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
        </motion.div>
      </div>
      <LineGradient />

      {/* PROJECTS */}
      <div className="w-5/6 mx-auto">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
        </motion.div>
      </div>
      <LineGradient />

      {/* TESTIMONIALS */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("testimonials")}
          >
            <Testimonials />
        </motion.div>
      </div>
      <LineGradient />

      {/* CONTACT */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
        </motion.div>
      </div>
          <Footer />
    </div>
  );
}

export default App;