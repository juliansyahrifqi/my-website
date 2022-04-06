import React from 'react';
import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav
        className="flex justify-between p-2 items-center w-full bg-[#070F1E]"
      >
        <div className="md:container mx-auto">
          <div className="flex justify-between p-4 items-center">
            <div className="logo w-12">
              <Link to="/">
                <img src={logo} alt="logo" className="w-16" />
              </Link>
            </div>

            <ul
              className="flex w-full justify-start text-white font-medium text-center items-center pl-5 text-[#B8BCC2]"
            >
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <Link to={`/blog`}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;