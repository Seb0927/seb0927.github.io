import { AnimatePresence, motion } from "framer-motion";
import Header from './Header.jsx';
import Blob from "./Blob.jsx";
import { bgLightestColorsVariants, bgLightestColorsValues, bgDarkColorsValues } from "../../utils";
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children, sections, currentSection, setCurrentSection }) => {
  // Component variables
  const handleSection = (section) => {
    if (section !== undefined) {
      let indexSection = sections.indexOf(section)
      setCurrentSection(sections[indexSection])
    }
  }
  let indexSection = sections.indexOf(currentSection)

  // Framer motion variants
  const renderVariants = {
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

  //Framer motion Drag variables
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      {/* Background */}
      <motion.div className={`${bgLightestColorsVariants[indexSection]} md:h-screen md:w-screen md:overflow-hidden md:grid md:grid-cols-13 md:gap-2 md:px-20`}
        variants={lightestVariants}
        layoutId="current-background"
        animate="newColor">

        {/* Blob */}
        <motion.div className="fixed z-10 overflow-hidden left-0 bottom-0 translate-y-1/2 -translate-x-1/2 sm:z-20" >
          <Blob sections={sections} currentSection={currentSection} handleSection={handleSection}></Blob>
        </motion.div>

        {/* Blob */}
        <motion.div className="fixed z-10 overflow-hidden right-0 top-0 -translate-y-1/2 translate-x-1/2 sm:z-20">
          <Blob sections={sections} currentSection={currentSection} handleSection={handleSection}></Blob>
        </motion.div>

        {/* Left Arrow */}
        <div className="hidden md:flex md:justify-start md:items-center">
          <AnimatePresence>
            {indexSection > 0 &&
              <motion.div
                variants={{ ...renderVariants, ...darkVariants }}
                initial={"hiddenUp"}
                animate={["visible", "newColor"]}
                exit={["oldColor", "hiddenDown"]}
                custom={1}>
                <button onClick={() => handleSection(sections[sections.indexOf(currentSection) - 1])}>
                  <ChevronLeft className={`md:h-16 md:w-16`} />
                </button>
              </motion.div>}
          </AnimatePresence>
        </div>

        {/* Middle Content*/}
        <div className="md:col-span-11">
          {/* Header */}
          <motion.div className="relative z-20 py-6 h-auto text-black w-full flex justify-center items-center md:pt-6 md:h-1/6 sm:z-10"
            variants={renderVariants}
            initial={"hiddenUp"}
            animate={"visible"}
            custom={0}>
            <Header sections={sections} currentSection={currentSection} handleSection={handleSection}></Header>
          </motion.div>

          {/* Content */}
          <motion.div className={`relative px-16 py-4 md:content-start md:h-5/6 md:col-span-11 md:px-0 md:py-0`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={false}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleSection(sections[sections.indexOf(currentSection) + 1])
              } else if (swipe > swipeConfidenceThreshold) {
                handleSection(sections[sections.indexOf(currentSection) - 1])
              }
            }}>
            {children}
          </motion.div>
        </div>

        {/* Right Arrow */}
        <div className="hidden md:flex md:justify-end items-center">
          <AnimatePresence>
            {indexSection < sections.length - 1 && <motion.div variants={{ ...renderVariants, ...darkVariants }}
              initial={"hiddenUp"}
              animate={["newColor", "visible"]}
              exit={["oldColor", "hiddenDown"]}
              custom={1}>
              <button onClick={() => handleSection(sections[sections.indexOf(currentSection) + 1])}>
                <ChevronRight className={`md:h-16 md:w-16`} />
              </button>
            </motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}

export default Background;