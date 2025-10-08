import React from 'react';
import { NavLink } from 'react-router';
import github from '../../assets/icons/github.png'
import logo from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io";
const Header = () => {
  const link = <>
    <li ><NavLink to={'/'} end >Home</NavLink></li>
    <li ><NavLink to={'/apps'} end>Apps</NavLink></li>
    <li ><NavLink to={'/installation'} end>Installation</NavLink></li>
  </>
  return (
    <>
      <div className=" bg-base-100 shadow-sm">
        <div className='navbar max-w-[1440px] mx-auto '>


          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {link}
              </ul>
            </div>
            <div className=" flex  items-center font-bold text-xl ">
              <img src={logo} alt="" className='size-10' />
              <p className=' text-linear ml-2 '>
                HERO.IO
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 space-x-3 font-bold">
              {link}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn-linear">
              {/* <img src={github} alt="" /> */}
              <IoLogoGithub />
              Contribute
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;