import Java from '../../assets/vectors/java.svg?react';
import Python from '../../assets/vectors/python.svg?react';
import React2 from '../../assets/vectors/react.svg?react';

const ProgrammingIcons = () => {
  return (
      <div className="grid grid-cols-3 place-items-center">
        <Java className="fill-current text-green-dark h-14 w-14"/>
        <Python className="fill-current text-green-dark h-14 w-14"/>
        <React2 className="fill-current text-green-dark h-14 w-14"/>
      </div>
  )
}

export default ProgrammingIcons