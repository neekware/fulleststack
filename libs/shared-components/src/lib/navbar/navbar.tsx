/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.module.scss';
import Link from 'next/link'
import { useState } from 'react';


/* eslint-disable-next-line */
export interface NavbarProps { }

export function Navbar(props: NavbarProps) {

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap bg-slate-800 p-3 dark:bg-slate-800'>
      <Link href='/'>
        <a
          className='inline-flex items-center p-2 mr-4'>
          <span className='text-xl text-white font-bold uppercase tracking-wide'>
            Avidtrader
          </span>
        </a>
      </Link>
      <button
        className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
      </button>
      <div
        className={`${active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
            <a
              onClick={handleClick}
              className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white '>
              Home
            </a>
          </Link>
          <Link href='/dashboard'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
              Dashboard
            </a>
          </Link>
          <Link href='/about'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
              About
            </a>
          </Link>

        </div>
      </div>
    </nav>

  );
}

export default Navbar