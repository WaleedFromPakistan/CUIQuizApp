import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-center items-center  gap-11 text-xl p-4 font-bold'>
                <Link href={'/quiz/pak_study'}> <li className='h-[30px] w-[120px] text-center rounded-xl bg-black text-white'>PakStudy</li></Link>
                <Link href={'/quiz/maths'}><li className='h-[30px] w-[120px] text-center rounded-xl bg-black text-white'>Maths</li></Link>
                <Link href={'/quiz/physics'}><li className='h-[30px] w-[120px] text-center rounded-xl bg-black text-white'>Physics</li></Link>
                <Link href={'/quiz/chemistry'}><li className='h-[30px] w-[120px] text-center rounded-xl bg-black text-white'>Chemistry</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;
