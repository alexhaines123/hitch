'use client'

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
      className={`bg-pri-light text-black border-2 border-white py-2 px-4 rounded-md font-bold ${
        props.addClassName || ''
      }`}
      {...props}
    ></button>
  );
};

export default Button;
