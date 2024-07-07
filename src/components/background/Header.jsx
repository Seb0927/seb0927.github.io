function Header(props) {
  const gridColumnsVariants = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  const sections = props.sections.map((section) => {
    return (
      <div key={section} className="flex justify-center items-center text-lg p-2">
        {section}
      </div>
    )
  })

  const backgrounds = props.sections.map((section) => {
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

  console.log(props.sections.length)

  return (
    <div>
      <div className={`grid ${gridColumnsVariants[props.sections.length]} gap-2`}>
        {sections}
      </div>
      <div className={`grid ${gridColumnsVariants[props.sections.length]}`}>
        {backgrounds}
      </div>
    </div>
  )
}

export default Header