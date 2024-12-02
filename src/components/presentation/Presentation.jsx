import { useEffect } from "react";
import { motion } from "framer-motion";
import ProgrammingIcons from "./ProgrammingIcons.jsx";
import meImage from '../../assets/images/me.jpg';

function Presentation({ hasRendered, setHasRendered, sectionIndex }) {

  useEffect(() => {
    const updatedRenderedState = [...hasRendered];
    updatedRenderedState[sectionIndex] = true;
    setHasRendered(updatedRenderedState);
  }, [])

  // Framer variables
  let renderVariants = null;
  if (!hasRendered[sectionIndex]) {
    renderVariants = {
      hiddenUp: { y: 10, opacity: 0 },
      visible: (i) => {
        const delay = 0 + i * 0.20;
        return {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay,
          }
        }
      },
    }

  } else {
    renderVariants = {
      hiddenUp: { opacity: 0 },
      visible: {
        opacity: 1
      }
    }
  }

  return (
    <div>
      {/* Content */}
      <motion.div className="md:grid md:grid-cols-11 md:gap-2"
        key={"presentation"}>
        {/* Presentation */}
        <div className="md:col-span-5 content-center">
          <motion.h1 className="mb-10 text-5xl font-semibold"
            variants={renderVariants}
            initial="hiddenUp"
            animate="visible"
            custom={2}
          >I’m Sebastian Idrobo</motion.h1>
          <motion.div className="md:overflow-y-auto md:max-h-80"
            variants={renderVariants}
            initial="hiddenUp"
            animate="visible"
            custom={3}>
            <p className="text-lg">I am a passionate Systems Engineer with a mindset geared towards challenges and endeavors, always seeking out new opportunities to push the boundaries of what is possible and deliver impactful results. My career is orientated to:</p>
            <br></br>
            <ul className="list-disc list-inside text-lg">
              <li>DevOps engineer.</li>
              <li>Full stack development.</li>
              <li>Data Science.</li>
            </ul>
          </motion.div>
        </div>

        {/* Space */}
        <div></div>

        {/* Image */}
        <motion.div className="flex justify-center my-6 md:col-span-5"
          variants={renderVariants}
          initial="hiddenUp"
          animate="visible"
          custom={4}>
          <img src={meImage} className="rounded-4xl max-h-88 my-auto"></img>
        </motion.div>

      </motion.div>

      {/* Programming Icons */}
      <motion.div className="content-start py-6 md:pt-12"
        variants={renderVariants}
        initial="hiddenUp"
        animate="visible"
        custom={5}>
        <ProgrammingIcons></ProgrammingIcons>
      </motion.div>
    </div>
  )
}

export default Presentation;
