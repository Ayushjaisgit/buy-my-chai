import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-4 h-16 syncopate-regular">
      <h1 className="logo text-xl h-6 font-extrabold notable-regular ">Buy me a chai</h1>
      <ul className="flex justify-between px-4 mx-1 gap-3">
        <li className="font-medium text-xs ">Home</li>
        <li className="font-medium text-xs ">About</li>
        <li className="font-medium text-xs ">Projects</li>
        <li className="font-medium text-xs ">Login</li>
        <li className="font-medium text-xs ">Signup</li>
      </ul>
    </nav>
  );
};

export default Navbar;
