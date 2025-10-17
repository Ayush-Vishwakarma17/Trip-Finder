"use client";

import React, { useState } from "react";
import { UserCircle2, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-10 py-3 relative">
      {/* Logo and Name */}
      <div className="flex items-center gap-3 md:w-1/3">
        <img src="./destination.png" className="w-10 h-10" alt="Logo" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg md:text-2xl">Trip Finder</h1>
          <h1 className="font-light text-[10px] md:text-xs">
            Making it easier to choose places
          </h1>
        </div>
      </div>

      {/* Desktop Menu */}

      <div className="hidden lg:flex justify-center items-center gap-20 font-medium">
        <a href="./">
          <h3 className="hover:text-red-400 hover:scale-120 cursor-pointer transition">Home</h3>
        </a>
        <a href="./">
          <h3 className="hover:text-red-400 hover:scale-120 cursor-pointer transition">Top Places</h3>
        </a>
        <a href="./">
          <h3 className="hover:text-red-400 hover:scale-120 cursor-pointer transition">Filter</h3>
        </a>
      </div>

      {/* Hamburger Icon (Visible only on mobile) */}

      <div className="lg:hidden flex items-center ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Account icon */}
      <div className="flex items-center justify-end gap-2 md:gap-3 md:w-1/4 ml-4">
        <UserCircle2
          className="h-8 w-8 hover:scale-110 md:h-10 md:w-10 bg-red-100 rounded-full text-gray-700 hover:text-red-400 transition"
          strokeWidth={0.8}
        />
        <h1 className="font-light text-xs md:text-sm hidden sm:block">
          Welcome, Ayush!
        </h1>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 font-medium lg:hidden">
          <a href="./" className="hover:text-red-400 cursor-pointer transition">
            Home
          </a>
          <a href="./" className="hover:text-red-400 cursor-pointer transition">
            Top Places
          </a>
          <a href="./" className="hover:text-red-400 cursor-pointer transition">
            Filter
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
