'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

interface Props {
  children?: React.ReactNode;
  addClassName?: string;
}

const Nav: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <>
      <nav className="max-w-md mx-auto w-full flex border-b-2 border-white py-2">
        <Button onClick={router.back}>Back</Button>
        <h2 className='ml-auto my-auto'>Hitch</h2>
      </nav>
    </>
  );
};

export default Nav;
