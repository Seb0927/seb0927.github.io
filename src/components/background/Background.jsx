import { motion } from "framer-motion";
import Header from './Header.jsx';
import Blob from "./Blob.jsx";
import ChevronLeft from '../../assets/vectors/chevron-left.svg?react';
import ChevronRight from '../../assets/vectors/chevron-right.svg?react';

const Background = ({ children }) => {

  const backgroundVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: (i) => {
      const delay = 0 + i * 0.20
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay
        }
      }
    },
  }

  return (
    <>
      {/* Blob */}
      <motion.div className="fixed overflow-hidden left-0 bottom-0 translate-y-1/2 -translate-x-1/2" >
        <Blob></Blob>
      </motion.div>

      {/* Blob */}
      <motion.div className="fixed overflow-hidden right-0 top-0 -translate-y-1/2 translate-x-1/2">
        <Blob></Blob>
      </motion.div>

      {/* Background */}
      <motion.div className="overflow-auto bg-green-lightest md:h-screen md:w-screen md:overflow-hidden md:grid md:grid-cols-13 md:gap-2 md:px-20">

        {/* Arrow */}
        <motion.div className="hidden md:flex md:items-center"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          custom={1}>
          <ChevronLeft className="fill-current text-green-dark md:h-16 md:w-16"/>
        </motion.div>

        {/* Middle Content*/}
        <div className="md:col-span-11">
          {/* Header */}
          <motion.div className="text-black w-full pt-12 pb-6 items flex justify-center h-1/6"
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            custom={0}>
            <Header sections={['Home', 'Projects', 'Experience', 'Contact']}></Header>
          </motion.div>

          {/* Content */}
          <div className="px-16 py-4 md:h-5/6 md:content-center md:col-span-11 md:px-0 md:py-0">
            {children}
          </div>
        </div>     

        {/* Arrow */}
        <motion.div className="hidden md:flex md:justify-end items-center"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          custom={2}>
          <ChevronRight className="fill-current text-green-dark md:h-16 md:w-16" />
        </motion.div>
      

      </motion.div>
    </>
  )
}

export default Background;