import { AnimatePresence, motion } from "framer-motion";
import { useWindowDimensions}  from '../../hooks'
import { gridColumnsVariants, bgDarkColorsVariants, bgLightColorsVariants, bgLightColorsValues, bgDarkColorsValues} from '../../utils'

function Header(props) { 

  const { sections, currentSection, handleSection } = props; 

  const index = sections.indexOf(currentSection)

  const { width, height } = useWindowDimensions();

  const isSmallScreen = width < 768;

  const slicingSections = (index) => {
    if (index == 0){
      return sections.slice(index, index + 3)
    } else if (index == sections.length - 1) {
      return sections.slice(index-2, index+1)
    }
      
    return sections.slice(index-1, index+2)
  }

  const lightVariants = {
    newColor: {
      backgroundColor: bgLightColorsValues[index],
      transition: {
        duration: 0.5
      }
    }
  }

  const sectionsToRender = isSmallScreen ? slicingSections(index) : sections;

  const sectionsReturn = sectionsToRender.map((section) => {
    return (
      <button key={section} onClick={() => handleSection(section)} className="flex justify-center items-center text-lg p-2">
        {section}
      </button>
    )
  })

  const backgrounds = sectionsToRender.map((section) => {
    const isCurrentSection = section === currentSection;
    return (
      <div key={section} className="relative">
        <motion.div className={`h-1.5 ${bgLightColorsVariants[index]}`} variants={lightVariants} animate={"newColor"}></motion.div>
        <AnimatePresence>
          {isCurrentSection && <motion.div
            key={"current-section"}
            layoutId="current-section"
            className={`h-1.5 ${bgDarkColorsVariants[index]} z-1`}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}
          />}
        </AnimatePresence>
      </div> 
    )
  })

  return (
    <div>
      <div className={`grid gap-2 ${gridColumnsVariants[sectionsToRender.length]}`}>
        {sectionsReturn}
      </div>
      <div className={`grid ${gridColumnsVariants[sectionsToRender.length]}`}>
        {backgrounds}
      </div>
    </div>
  )
}

export default Header