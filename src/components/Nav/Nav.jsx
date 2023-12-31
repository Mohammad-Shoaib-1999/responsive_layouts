import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../Button";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  const [open, setOpen] = useState(false);

  return (
    <header className=" ">
      <nav
        className="flex justify-between items-center mx-auto p-4 bg-gray-300 shadow-2xl"
       
    
      >
        <div className="logo-container">
          <a href="./index.html" className="text-black text-lg font-bold">
            Logo
          </a>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-20">
         
        </div>
        <div className="hidden md:flex">
          <a href="./index.html" className="text-black text-lg font-bold">
            Login/Logout
          </a>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenuOpen}>
          {isMenuOpen ? (
            <span id="closeHam">&#x2716;</span>
          ) : (
            <span id="openHam">&#9776;</span>
          )}
        </div>
      </nav>

   
      <div className="flex items-center justify-around border-black border-2 h-[30px] ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
         
          <div className=" md:hidden" onClick={() => setOpen(!open)}>
          {open ?  <button>Close</button> : <button>Menu</button>}
         
            {/* <button name={`${open ? "close" : "menu"}`}></button> */}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          {/* <Button /> */}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-20 overflow-y-auto bottom-0 py-2 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>

      <div
        className={`md:hidden absolute top-15 right-0 flex justify-center items-center  flex-col p-4 bg-white w-full ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block text-black py-2 "
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Nav;
