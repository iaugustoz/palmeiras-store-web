import React from 'react';
import logo from '../../assets/images/logo.png';

type LogotipoProps = {
  color: string;
};

const Logotipo: React.FC<LogotipoProps> = ({ color }) => {
  return (
    <>
      <figure className="flex items-center space-x-2">
        <img src={logo} className="w-16 sm:w-[74px]" alt="Logotipo" />
        <div className="h-[70px] border-solid border-gray-400 border-[1px]" />
        <figcaption className={`font-semibold ${color} max-w-0 leading-4 select-none`}>
          Official Store
        </figcaption>
      </figure>
    </>
  );
};

export default Logotipo;
