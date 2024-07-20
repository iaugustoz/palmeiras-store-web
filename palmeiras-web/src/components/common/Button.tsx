import { FaGoogle } from 'react-icons/fa';
import React from 'react';

type ButtonProps = {
  color: string;
  colorLogo: string;
  text: string;
  action?: () => void;
  hasLogo: boolean;
};

const Button: React.FC<ButtonProps> = ({
  color,
  colorLogo,
  text,
  action,
  hasLogo,
}) => {
  return (
    <button
      onClick={action ? action : () => {}}
      className={`flex justify-center items-center gap-x-3  ${color} text-white py-4 rounded-xl bg-green-900 w-full`}
    >
      <FaGoogle
        className={`text-2xl ${hasLogo ? `block` : `hidden`} ${colorLogo}`}
      />
      {text}
    </button>
  );
};

export default Button;
