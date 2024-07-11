import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'

function Header(props) {
  const [currentSection, setCurrentSection] = useState(props.sections[0])

  const gridColumnsVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  const bgDarkColorsVariants = {
    0: 'bg-green-dark',
    1: 'bg-purple-dark',
    2: 'bg-amber-dark',
    3: 'bg-green-dark',
    4: 'bg-purple-dark',
    5: 'bg-amber-dark',
  }

  const bgLightColorsVariants = {
    0: 'bg-green-light',
    1: 'bg-purple-light',
    2: 'bg-amber-light',
    3: 'bg-green-light',
    4: 'bg-purple-light',
    5: 'bg-amber-light',
  }

  const { width, height } = useWindowDimensions();

  const isSmallScreen = width < 768;

  const sectionsToRender = isSmallScreen ? props.sections.slice(0, 2) : props.sections;

  const sections = sectionsToRender.map((section) => {
    return (
      <button key={section} onClick={() => setCurrentSection(section)} className="flex justify-center items-center text-lg p-2">
        {section}
      </button>
    )
  })

  const backgrounds = sectionsToRender.map((section) => {
    let index = props.sections.indexOf(currentSection)
    console.log(index)

    if (section == currentSection) {
      return (
        <div key={section} className={`h-1.5 ${bgDarkColorsVariants[index]}`}>
        </div>
      )
    }

    return (
      <div key={section} className={`h-1.5 ${bgLightColorsVariants[index]}`}>
      </div>
    )
  })

  return (
    <div>
      <div className={`grid gap-2 ${gridColumnsVariants[sectionsToRender.length]}`}>
        {sections}
      </div>
      <div className={`grid ${gridColumnsVariants[sectionsToRender.length]}`}>
        {backgrounds}
      </div>
    </div>
  )
}

export default Header