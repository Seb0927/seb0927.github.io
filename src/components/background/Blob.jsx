import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { bgLightColorsValues } from '../../utils';
import Asterisk from '../../assets/vectors/asterisk.svg?react';

const Blob = (props) => {
  // Component variables
  const { sections, currentSection } = props; 
  const indexSection = sections.indexOf(currentSection);

  // Rotation and transition color controls
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  useEffect(() => {
    controls.start({
      fill: bgLightColorsValues[indexSection],
      transition: {
        duration: 0.5
      }
    });
  }, [currentSection]);

  const handleHoverStart = () => {
    controls.start({ scale: 1.1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1, transition: { duration: 0.2 } });
  };

  const handleClick = () => {
    controls.start({ scale: [null, 1.25, 1.1], transition: { duration: 0.5, times: [0, 0.25, 0.5]} });
  };

  return (
    <motion.div 
      initial={{ fill: bgLightColorsValues[indexSection] }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClickCapture={handleClick}
    >
      <Asterisk className="h-52 w-52 sm:w-72 sm:h-72 md:h-96 md:w-96 lg:h-108 lg:w-108" />
    </motion.div>
  );
}

export default Blob;
