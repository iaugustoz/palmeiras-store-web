import React from 'react';

type ButtonProps = {
  classes: string;
  classesLogo: string;
  text: string;
  action?: () => void;
  hasLogo: boolean;
  icon?: React.ElementType;
};

const Button: React.FC<ButtonProps> = ({
  classes,
  classesLogo,
  text,
  action,
  hasLogo,
  icon: Icon,
}) => {
  return (
    <button
      onClick={action ? action : () => {}}
      className={`flex justify-center items-center gap-x-3 ${classes} py-4 rounded-xl bg-green-900 w-full`}
    >
      {hasLogo && Icon && <Icon className={`${classesLogo}`} />}
      {text}
    </button>
  );
};

export default Button;
