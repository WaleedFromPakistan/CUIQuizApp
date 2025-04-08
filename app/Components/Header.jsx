import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <>
     <div className=' flex items-center justify-center w-full h-15 font-mono font-bold bg-blue-900'>
        <Link href={'/'}><h2 className=' text-5xl items-center  text-white '>CUI QUIZ PANNEL</h2></Link>
    </div> 
    </>
  );
}

export default Header;
