import React, { useState } from 'react'
import { DiApple } from "react-icons/di";
import { NavbarData } from '../../context/NavbarData';
import { IoSearch, IoBagOutline  } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen ] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };
  return (
    <nav className='text-2xl p-[8px]  xl:pl-20  xl:pr-20 lg:pl-20  lg:pr-20 md:pl-20  md:pr-20 flex justify-between'>
      <div className='relative flex justify-between w-[100%]'>
        <div>
          <a href="/">
            <DiApple />
          </a>
        </div>
        <div className='hidden xl:block md:hidden lg:block'>
          <ul className=' flex gap-8 text-[14px]'>
            {
              NavbarData.map((item, index)=>(
                <li key={index}><a href={item.url}>{item.text}</a></li>
              ))
            }
          </ul>
        </div>
        <div className=' text-[20px] flex gap-[30px] items-center'>
          <IoSearch></IoSearch>
          <IoBagOutline></IoBagOutline>
          <TbMenu className='block md:block xl:hidden lg:hidden' onClick={toggleMenu}></TbMenu>
          
        </div>
      </div>
      <div >
        <div className={`absolute  left-0 top-0 w-[100%] bg-white md:hidden lg:hidden ${isOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <FaTimes onClick={toggleMenu} className='absolute right-2 top-3 text-2xl'></FaTimes>
            <ul className='p-[50px] text-3xl font-semibold font-sans leading-10'>
              {NavbarData.map((item, index)=>(
                <li key={index}><a href={item.url}>{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar