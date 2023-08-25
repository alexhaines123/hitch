import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className="border-2 border-white py-1 px-2 rounded-md"
      {...props}
    ></button>
  );
};

export default Button;
