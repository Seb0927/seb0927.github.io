import { Background, Presentation, Projects, Experience, Contact } from "./components";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const sections = ['About me', 'Projects', 'Experience', 'Contact'];
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [hasRendered, setHasRendered] = useState(sections.map(() => false));

  const sectionElements = [
    <Presentation key={0} 
    hasRendered={hasRendered} 
    setHasRendered={setHasRendered} 
    sectionIndex={0}/>,
    <Projects key={1} 
    hasRendered={hasRendered} 
    setHasRendered={setHasRendered} 
    sectionIndex={1}/>,
    <Experience key={2} 
    hasRendered={hasRendered} 
    setHasRendered={setHasRendered} 
    sectionIndex={2}/>,
    <Contact key={3} 
    hasRendered={hasRendered} 
    setHasRendered={setHasRendered} 
    sectionIndex={3}/>,
  ];

  return (
    <Background
    sections={sections} 
    currentSection={currentSection} 
    setCurrentSection={setCurrentSection}>
      {/* Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          className="md:h-full"
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sectionElements[sections.indexOf(currentSection)]}
        </motion.div>
      </AnimatePresence>
    </Background>
  );
}
