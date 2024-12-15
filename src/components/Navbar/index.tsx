/* eslint-disable react-hooks/rules-of-hooks */
import { Bars3Icon, XCircleIcon } from "@heroicons/react/16/solid";
// import { useState } from "react";
import { nav } from "../../assets";
import { Link, NavLink } from "react-router";
import React from "react";
// import { NavLink } from "react-router";

const index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="py-10 md:w-5/6 mx-auto z-50 px-5 flex items-center justify-between ">
      <Link to='/' className="text-5xl font-extrabold font-mono text-yellow-400  uppercase">
        wetwan...
      </Link>
      <div className="">
        {isMenuOpen ? (
          <XCircleIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-red-700 w-10 h-10 hidden md:block"
          />
        ) : (
          <Bars3Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-red-700 w-10 h-10 relative"
          />
        )}
      </div>
      {isMenuOpen && (
        <ul className="w-3/5 bg-yellow-500 transition-all duration-700 ease-out md:w-[20%] md:h-fit gap-5 px-5 flex flex-col items-start py-6 md:bottom-0  md:absolute md:top-28 lg:right-52 sm:right-28 fixed top-0 bottom-0 right-0  sm:bg-white rounded-sm shadow-sm z-[999999]  shadow-slate-100">
          <div className=" w-full flex justify-end">
            <XCircleIcon
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-red-700 w-10 h-10 sm:hidden"
            />
          </div>

          {nav.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.link}
              className={({ isActive }) =>
                `w-52 py-2 capitalize text-xl cursor-pointer ${
                  isActive ? "text-red-800 md:text-red-800" : "md:hover:text-red-500 hover:text-white"
                }`
              }
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              {nav.label}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default index;
