import { motion } from "framer-motion";
import ProgrammingIcons from "./ProgrammingIcons.jsx";
import meImage from '../../assets/images/me.jpg';

function Presentation() {
  return (
    <>
      <div className="md:grid md:grid-cols-11 md:gap-2 md:h-5/6">
        {/* Presentation */}
        <div className="md:col-span-5 content-center">
          <h1 className="mb-10 text-5xl font-semibold">I’m Sebastian Idrobo</h1>
          <div className="overflow-auto md:max-h-80">
            <p className="text-lg">I am a passionate Systems Engineer with a mindset geared towards challenges and endeavors, always seeking out new opportunities to push the boundaries of what is possible and deliver impactful results. My career is orientated to:</p>
            <br></br>
            <ul className="list-disc list-inside text-lg">
              <li>DevOps engineer.</li>
              <li>Full stack development.</li>
              <li>Data Science.</li>
            </ul>
          </div>
        </div>
        {/* Space */}
        <div></div>
        {/* Image */}
        <div className="flex justify-center my-auto md:col-span-5">
          <img src={meImage} className="rounded-4xl max-h-88"></img>
        </div>
      </div>

      {/* Programming Icons */}
      <div className="md:h-1/6">
        <ProgrammingIcons></ProgrammingIcons>
      </div>
    </>
  )
}

export default Presentation