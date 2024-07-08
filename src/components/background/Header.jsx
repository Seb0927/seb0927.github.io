import useWindowDimensions from '../hooks/useWindowDimensions'

function Header(props) {
  const gridColumnsVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  const { width, height } = useWindowDimensions();

  const isSmallScreen =  width < 768;

  const sectionsToRender = isSmallScreen ? props.sections.slice(0, 2) : props.sections;

  const sections = sectionsToRender.map((section) => {
    return (
      <div key={section} className="flex justify-center items-center text-lg p-2">
        {section}
      </div>
    )
  })

  const backgrounds = sectionsToRender.map((section) => {
    console.log("Hola")
    if (section == 'Home'){
      return (
        <div key={section} className="h-1.5 bg-green-dark">
        </div>
      )
    }
    
    return (
      <div key={section}className="h-1.5 bg-green-light">
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