'use client'
 
import React from "react";
import { useRouter } from 'next/navigation';


const Navbar = () => {
const router = useRouter();
 return (

    <div className="fixed z-[9999] navbar bg-pink-400 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => router.push('/')}>
              <a>Homepage</a>
            </li>

            <li onClick={() => router.push('/gift/page')}>
              <a>Gift</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-bold text-2xl text-white">
          WOMAN AT FIT
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
