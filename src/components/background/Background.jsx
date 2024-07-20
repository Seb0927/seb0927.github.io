import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from './Header.jsx';
import Blob from "./Blob.jsx";
import usePrevious from "../../hooks/usePrevious";
import { bgLightestColorsVariants, textDarkColorsVariants, bgLightestColorsValues, bgDarkColorsValues } from "../../utils";
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children }) => {

  const sections = ['Home', 'Projects', 'Experience', 'Contact']

  const [currentSection, setCurrentSection] = useState(sections[0])

  const handleSection = (section) => {
    let indexSection = sections.indexOf(section)
    setCurrentSection(sections[indexSection])
  }

  let indexSection = sections.indexOf(currentSection)

  const initialVariants = {
    hiddenUp: { y: 10, opacity: 0 },
    hiddenDown: { y: -10, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.20
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
        }
      }
    },
  }

  const lightestVariants = {
    newColor: {
      backgroundColor: bgLightestColorsValues[indexSection],
      transition: {
        duration: 0.5
      }
    }
  }

  const darkVariants = {
    oldColor: {
      fill: bgDarkColorsValues[(indexSection === 1 ? 0 : indexSection - 1)],
      transition: {
        duration: 0.5
      }
    },
    newColor: {
      fill: bgDarkColorsValues[indexSection],
      transition: {
        duration: 0.5
      }
    }
  }


  return (
    <>
      {/* Blob */}
      <motion.div className="fixed overflow-hidden left-0 bottom-0 translate-y-1/2 -translate-x-1/2" >
        <Blob sections={sections} currentSection={currentSection} handleSection={handleSection}></Blob>
      </motion.div>

      {/* Blob */}
      <motion.div className="fixed overflow-hidden right-0 top-0 -translate-y-1/2 translate-x-1/2">
        <Blob sections={sections} currentSection={currentSection} handleSection={handleSection}></Blob>
      </motion.div>

      {/* Background */}
      <motion.div className={`overflow-auto ${bgLightestColorsVariants[indexSection]} md:h-screen md:w-screen md:overflow-hidden md:grid md:grid-cols-13 md:gap-2 md:px-20`}
        variants={lightestVariants}
        layoutId="current-background"
        animate="newColor">

        {/* Arrow */}
        <motion.div className="hidden md:flex md:justify-start md:items-center">
          <AnimatePresence>
            {indexSection > 0 && <motion.div variants={{ ...initialVariants, ...darkVariants }}
              initial={"hiddenUp"}
              animate={["visible", "newColor"]}
              exit={["oldColor", "hiddenDown"]}
              custom={1}>
              <button onClick={() => handleSection(sections[sections.indexOf(currentSection) - 1])}>
                <ChevronLeft className={`md:h-16 md:w-16`} />
              </button>
            </motion.div>}
          </AnimatePresence>
        </motion.div>

        {/* Middle Content*/}
        <div className="md:col-span-11">
          {/* Header */}
          <motion.div className="text-black w-full pt-12 pb-6 items flex justify-center h-1/6"
            variants={initialVariants}
            initial="hiddenUp"
            animate="visible"
            custom={0}>
            <Header sections={sections} currentSection={currentSection} handleSection={handleSection}></Header>
          </motion.div>

          {/* Content */}
          <div className="px-16 py-4 md:h-5/6 md:content-center md:col-span-11 md:px-0 md:py-0">
            {children[indexSection]}
          </div>
        </div>

        {/* Arrow */}
        <motion.div className="hidden md:flex md:justify-end items-center">
          <AnimatePresence>
            {indexSection < sections.length - 1 && <motion.div variants={{ ...initialVariants, ...darkVariants }}
              initial={"hiddenUp"}
              animate={["newColor", "visible"]}
              exit={["oldColor", "hiddenDown"]}
              custom={1}>
              <button onClick={() => handleSection(sections[sections.indexOf(currentSection) + 1])}>
                <ChevronRight className={`md:h-16 md:w-16`} />
              </button>
            </motion.div>}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </>
  )
}

export default Background;