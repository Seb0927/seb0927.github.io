import { motion } from "framer-motion";
import Asterisk from '../../assets/vectors/asterisk.svg?react';

const Blob = ({ onClick }) => {
  return (
    <Asterisk className="fill-current text-green-light h-56 w-56 md:h-88 md:w-88">
    </Asterisk>
  )
}

export default Blob;