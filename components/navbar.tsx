import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavLink = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  console.log(router);
  return (
    <li className='py-2 px-4 hover:bg-amber-300 rounded-md duration-300'>
      <Link href='/'>{children}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className='bg-amber-200 py-4 px-6'>
      <div className='flex justify-between max-w-3xl mx-auto'>
        <Image
          src='/tripletex_logo.png'
          alt=''
          width={50}
          height={50}
          className='rounded-full hover:scale-125 duration-300'
        />
        <ul className='flex justify-evenly items-center gap-4 font-medium'>
          <NavLink>Showcase</NavLink>
          <NavLink>Docs</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>About</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
