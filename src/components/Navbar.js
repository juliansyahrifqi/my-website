import React from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search.png';

function Navbar() {
    return (
      <nav
        className="flex justify-between p-4 items-center"
        style={{ backgroundColor: "#070F1E" }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between p-4 items-center">
            <div className="logo w-1/4">
              <img src={logo} alt="logo" className="w-12" />
            </div>

            <ul
              className="flex w-1/2 justify-center text-white font-medium "
              style={{ color: "#B8BCC2" }}
            >
              <li className="mx-5 hover:text-white transition-colors duration-500 cursor-pointer">
                <a href="#">Frontend</a>
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
              className="flex justify-center items-center w-1/4 px-3 rounded-full border-2 focus-within:border-white"
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