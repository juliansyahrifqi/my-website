import React from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav
        className="flex justify-between p-4 items-center w-full"
        style={{ backgroundColor: "#070F1E" }}
      >
        <div className="md:container mx-auto">
          <div className="flex justify-between p-4 items-center">
            <div className="logo w-16">
              <Link to="/"> 
                <img src={logo} alt="logo" className="w-16" />
              </Link>
            </div>

            <ul
              className="flex w-full justify-start text-white font-medium text-center items-center pl-5"
              style={{ color: "#B8BCC2" }}
            >
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <Link to={`/blog`}>
                  Blog
                </Link>
              </li>
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <a href="#">Backend</a>
              </li>
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <a href="#">UI Design</a>
              </li>
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <a href="#">Music</a>
              </li>
            </ul>

            <div
              className="flex justify-center items-center px-3 rounded-full w-1/4 border-2 focus-within:border-white"
              style={{ borderColor: "B8BCC2" }}
            >
              <img src={searchIcon} className="w-4" />
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-full outline-none rounded-full bg-transparent text-white"
              />
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;