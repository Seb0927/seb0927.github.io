import { motion } from "framer-motion";
import Header from './Header.jsx';
import ProgrammingIcons from "./ProgrammingIcons.jsx";
import Blob from "./Blob.jsx";
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children }) => {

  console.log(children)

  return (
    <motion.div className="overflow-auto bg-green-lightest md:h-screen md:w-screen md:overflow-hidden">
      {/* Blob */}
      <motion.div className="fixed overflow-hidden left-0 bottom-0 translate-y-1/2 -translate-x-1/2">
        <Blob></Blob>
      </motion.div>

      {/* Blob */}
      <div className="fixed overflow-hidden right-0 top-0 -translate-y-1/2 translate-x-1/2">
        <Blob></Blob>
      </div>
      
      {/* Header */}
      <div className="text-black w-full pt-12 pb-6 items flex justify-center h-1/6">
        <Header sections={['Home', 'Projects', 'Experience', 'Contact']}></Header>
      </div>

      {/* Content area */}
      <div className="px-16 py-4 items-center place-content-center md:px-20 md:h-4/6 md:grid md:grid-cols-13 md:gap-2">
        {/* Arrow */}
        <div className="hidden md:flex md:justify-start">
          <ChevronLeft className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>

        {/* Content */}
        {children}

        {/* Arrow */}
        <div className="hidden md:flex md:justify-end">
          <ChevronRight className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>
      </div>

      {/* Programming Icons */}
      <div className="px-24 pb-12 h-1/6 md:px-36">
        <ProgrammingIcons></ProgrammingIcons>
      </div>

    </motion.div>
  )
}

export default Background;