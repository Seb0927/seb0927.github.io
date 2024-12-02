import React, { useState } from 'react';
import { motion } from "framer-motion";

function Project(props) {
  const { title, description, img, link } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => { setIsHovered(true) }
  const handleHoverEnd = () => { setIsHovered(false) }

  return (
    <motion.div
      className="relative flex items-center md:h-full md:w-full rounded-3xl overflow-hidden bg-zinc-100 "
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTap={() => setIsHovered(!isHovered)}
    >
      <div className='absolute inset-0'>
          <img src={img} alt="Project" className="w-full h-full object-cover opacity-10" />
        </div>

      <motion.div
        className="p-4 w-full"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        

        <h2 className="text-center text-2xl font-bold mb-2">{title}</h2>
        <p className="text-center mb-4">
          {description}
        </p>
        <div className="flex justify-center">
          <a href={link}>
            <button className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              Visit
            </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
