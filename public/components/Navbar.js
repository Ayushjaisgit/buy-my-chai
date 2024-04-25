"use client";
import React from "react";
import coffee from "../../app/assets/coffee-cup.png";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {

  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <nav className="bg-black text-white flex justify-between items-center px-4 h-16 syncopate-regular">
      <Image
        src={coffee}
        className="w-12 h-12 ml-4 mt-2 justify-center items-center from-purple-900 to-purple-900"
        alt="chailogo"
      ></Image>
      <div>
        <Link href={"/login"}>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-800 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-white  rounded-lg text-sm px-2.5 py-2.5 text-center me-2.5 syncopate-bold font-bold"
          >
            Login!
          </button>
        </Link>
      </div>
      {/* <ul className="flex justify-between px-4 mx-1 gap-3">
        <li className="font-medium text-xs ">Home</li>
        <li className="font-medium text-xs ">About</li>
        <li className="font-medium text-xs ">Projects</li>
        <li className="font-medium text-xs ">Login</li>
        <li className="font-medium text-xs ">Signup</li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
