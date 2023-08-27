import React, { MouseEventHandler } from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  addClassName?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`border-2 border-white py-1 px-2 rounded-md ${
        props.addClassName || ''
      }`}
      {...props}
    ></button>
  );
};

export default Button;
