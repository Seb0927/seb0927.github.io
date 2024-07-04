function Header(props) {
  console.log(props.sections)

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
        <div className="h-1.5 bg-green-dark">
        </div>
      )
    }
    
    return (
      <div className="h-1.5 bg-green-light">
      </div>
    )
  })

  console.log(props.sections.length)

  return (
    <>
      <div>
        <div className={`grid grid-cols-${props.sections.length} gap-2`}>
          {sections}
        </div>
        <div className={`grid grid-cols-${props.sections.length}`}>
          {backgrounds}
        </div>
      </div>
    </>
  )
}

export default Header