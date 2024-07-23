import Java from '../../assets/vectors/java.svg?react';
import Python from '../../assets/vectors/python.svg?react';
import React2 from '../../assets/vectors/react.svg?react';

const ProgrammingIcons = () => {
  return (
    <div className="grid grid-cols-3 place-items-center">
      <Java className="fill-current text-green-dark h-10 w-10 md:h-14 md:w-14" />
      <Python className="fill-current text-green-dark h-10 w-10 md:h-14 md:w-14" />
      <React2 className="fill-current text-green-dark h-10 w-10 md:h-14 md:w-14" />
    </div>
  )
}

export default ProgrammingIcons