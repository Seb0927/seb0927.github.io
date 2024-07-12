import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'

function Header(props) {
  const { sections, currentSection, handleSection } = props;  

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

  const index = sections.indexOf(currentSection)

  const { width, height } = useWindowDimensions();

  const isSmallScreen = width < 768;

  console.log("------")
  console.log(index)
  console.log(sections.length - 1)

  const slicingSections = (index) => {
    if (index == 0){
      return sections.slice(index, index + 3)
    } else if (index == sections.length - 1) {
      return sections.slice(index-2, index+1)
    }
      
    return sections.slice(index-1, index+2)
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
        {sectionsReturn}
      </div>
      <div className={`grid ${gridColumnsVariants[sectionsToRender.length]}`}>
        {backgrounds}
      </div>
    </div>
  )
}

export default Header