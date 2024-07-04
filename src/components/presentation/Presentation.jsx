import meImage from '../../assets/images/me.jpg';

function Presentation() {
  return (
    <>
      {/* Presentation */}
      <div className="col-span-5">
        <h1 className="mb-10 text-5xl font-semibold">I’m Sebastian Idrobo</h1>
        <p className="text-lg">I am a passionate Systems Engineer with a mindset geared towards challenges and endeavors. My career is orientated to:</p>
        <br></br>
        <ul className="list-disc list-inside text-lg">
          <li>DevOps engineer.</li>
          <li>Full stack development.</li>
          <li>Data Science.</li>
        </ul>
      </div>
      {/* Space */}
      <div></div>
      {/* Image */}
      <div className="col-span-5 flex justify-center">
        <img src={meImage} className="rounded-4xl max-h-96"></img>
      </div>
    </>
  )
}

export default Presentation