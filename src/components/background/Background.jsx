import { motion } from "framer-motion";
import Header from './Header.jsx';
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children }) => {
  return (
    <motion.div className="bg-green-lightest h-screen w-screen overflow-hidden">
      {/* Header with distinct styling */}
      <div className="text-black w-full p-20 items flex justify-center">
        <Header></Header>
      </div>
      {/* Content area with padding and grid layout */}
      <div className="px-20 grid grid-cols-13 gap-2 items-center place-content-start h-full">
        {/* Arrow */}
        <div className="flex justify-start">
          <ChevronLeft className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>
        {children}
        {/* Arrow */}
        <div className="flex justify-end">
          <ChevronRight className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>
      </div>
    </motion.div>
  )
}

export default Background;