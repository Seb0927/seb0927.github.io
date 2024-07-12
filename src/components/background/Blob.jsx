import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Asterisk from '../../assets/vectors/asterisk.svg?react';

const Blob = ({ onClick }) => {
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

  const handleHoverStart = () => {
    controls.start({ scale: 1.1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = () => {
    controls.start({ scale: 1, transition: { duration: 0.2 } });
  };

  const handleClick = () => {
    controls.start({ scale: [null, 1.25, 1.1], transition: { duration: 0.5, times: [0, 0.25, 0.5]}});
  }

  return (
    <motion.div 
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClickCapture={handleClick}
    >
      <Asterisk className="fill-current text-green-light h-52 w-52 sm:w-72 sm:h-72 md:h-96 md:w-96 lg:h-108 lg:w-108">
      </Asterisk>
    </motion.div>
  );
}

export default Blob;
