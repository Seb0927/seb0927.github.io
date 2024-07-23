import { AnimatePresence, motion } from "framer-motion";
import { useWindowDimensions } from '../../hooks'
import { gridColumnsVariants, bgDarkColorsVariants, bgLightColorsVariants, bgLightColorsValues, bgDarkColorsValues } from '../../utils'

function Header(props) {
  // Component variables
  const { sections, currentSection, handleSection } = props;
  const index = sections.indexOf(currentSection)

  // Amount of sections to render
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 768;

  const slicingSections = (index) => {
    if (index == 0) {
      return sections.slice(index, index + 3)
    } else if (index == sections.length - 1) {
      return sections.slice(index - 2, index + 1)
    }

    return sections.slice(index - 1, index + 2)
  }

  const sectionsToRender = isSmallScreen ? slicingSections(index) : sections;

  const sectionsReturn = sectionsToRender.map((section) => {
    return (
      <motion.li className="flex-1 text-center text-lg p-2" initial={{ opacity: 0, transition: { delay: 0.5 } }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, transition: { delay: 0 } }}
        layoutId={section}
        key={section}>
        <motion.button onClick={() => handleSection(section)}>
          {section}
        </motion.button>
      </motion.li>
    )
  })

  // Framer motion variants
  const lightVariants = {
    newColor: {
      backgroundColor: bgLightColorsValues[index],
      transition: {
        duration: 0.5
      }
    }
  }

  // Bottom bar backgrounds
  const backgrounds = sectionsToRender.map((section) => {
    const isCurrentSection = section === currentSection;
    return (
      <div key={section} className="flex-1 justify-center h-1.5">
        <motion.div className={`h-1.5 ${bgLightColorsVariants[index]}`} variants={lightVariants} animate={"newColor"}>
          <AnimatePresence mode="sync">
            {isCurrentSection && <motion.div
              key={"current-section"}
              layoutId="current-section"
              className={`h-1.5 ${bgDarkColorsVariants[index]} relative z-1`}
            />}
          </AnimatePresence>
        </motion.div>
      </div>
    )
  })

  return (
    <div className="w-88 md:w-120">
      {/* Header Sections */}
      <nav>
        <ul className="flex flex-row justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            {sectionsReturn}
          </AnimatePresence>
        </ul>
      </nav>
      {/* Bottom Bar Header */}
      <div className="flex flex-row">
        {backgrounds}
      </div>
    </div>
  )
}

export default Header