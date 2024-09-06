import React, { forwardRef } from 'react';

type ButtonProps = {
  classes: string;
  classesLogo?: string;
  text: string;
  action?: () => void;
  hasLogo?: boolean;
  icon?: React.ElementType;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ classes, classesLogo, text, action, hasLogo, icon: Icon }, ref) => {
    return (
      <button
        onClick={action}
        className={`flex justify-center items-center gap-x-3 ${classes}`}
        ref={ref}
      >
        {hasLogo && Icon && <Icon className={`${classesLogo}`} />}
        {text}
      </button>
    );
  }
);

export default Button;
