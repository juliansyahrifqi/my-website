import React, { useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex flex-col transition-height duration-75 ease-out">
      <div className="hidden md:flex justify-between">
        <Navbar />
      </div>
      <div
        className="flex md:hidden flex-row"
        style={{ backgroundColor: "#070F1E" }}
      >
        <div className="p-4 w-full flex flex-row justify-between items-center shadow-md">
          <button
            type="button"
            onClick={() => setToggleSidebar(true)}
            className="text-white"
          >
            Open
          </button>
          <a href={`user-profile}`}>
            <img src={logo} alt="user-pic" className="w-10 h-10" />
          </a>
        </div>

        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <button type="button" onClick={() => setToggleSidebar(false)}>
                Tutup
              </button>
            </div>
            <p>Test4</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
