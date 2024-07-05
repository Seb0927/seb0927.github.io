import { motion } from "framer-motion";
import Header from './Header.jsx';
import ProgrammingIcons from "./ProgrammingIcons.jsx";
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children }) => {

  console.log(children)

  return (
    <motion.div className="bg-green-lightest h-screen w-screen overflow-hidden">
      {/* Header */}
      <div className="text-black w-full pt-12 pb-6 items flex justify-center h-1/6">
        <Header sections={['Home', 'Projects', 'Experience', 'Contact']}></Header>
      </div>

      {/* Content area */}
      <div className="px-20 grid grid-cols-13 gap-2 items-center place-content-center h-4/6">
        {/* Arrow */}
        <div className="flex justify-start">
          <ChevronLeft className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>
        {/* Content */}
        {children}
        {/* Arrow */}
        <div className="flex justify-end">
          <ChevronRight className="fill-current text-green-dark h-2/6 w-2/6"/>
        </div>
      </div>

      {/* Programming Icons */}
      <div className="pt-6 pb-12 h-1/6 px-36">
        <ProgrammingIcons></ProgrammingIcons>
      </div>

    </motion.div>
  )
}

export default Background;