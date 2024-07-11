import { motion } from "framer-motion";
import ProgrammingIcons from "./ProgrammingIcons.jsx";
import meImage from '../../assets/images/me.jpg';

function Presentation() {

  return (
    <>
      {/* Content */}
      <motion.div className="md:grid md:grid-cols-11 md:gap-2 md:h-5/6">

        {/* Presentation */}
        <motion.div className="md:col-span-5 content-center">
          <h1 className="mb-10 text-5xl font-semibold">I’m Sebastian Idrobo</h1>
          <motion.div className="overflow-auto md:max-h-80">
            <p className="text-lg">I am a passionate Systems Engineer with a mindset geared towards challenges and endeavors, always seeking out new opportunities to push the boundaries of what is possible and deliver impactful results. My career is orientated to:</p>
            <br></br>
            <ul className="list-disc list-inside text-lg">
              <li>DevOps engineer.</li>
              <li>Full stack development.</li>
              <li>Data Science.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Space */}
        <motion.div></motion.div>

        {/* Image */}
        <motion.div className="flex justify-center my-6 md:col-span-5">
          <img src={meImage} className="rounded-4xl max-h-88 my-auto"></img>
        </motion.div>

      </motion.div>

      {/* Programming Icons */}
      <motion.div className="content-start py-6 md:py-0 md:h-1/6">
        <ProgrammingIcons></ProgrammingIcons>
      </motion.div>
    </>
  )
}

export default Presentation