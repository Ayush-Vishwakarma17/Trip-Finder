import React from 'react'
import { UserCircle2 } from 'lucide-react'




function Header() {
  return (


    <div className="bg-white h-20 shadow-md flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-10">
      
      {/* Logo and Name */}
      <div className="flex items-center gap-3 md:w-1/3">
        <img src="./destination.png" className="w-10 h-10" alt="Logo" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg md:text-2xl">Trip Finder</h1>
          <h1 className="font-light text-[10px] md:text-xs">Making it easier to choose places</h1>
        </div>
      </div>

      {/* Menu */}
      <div className="hidden md:flex justify-center items-center gap-20 font-medium mt-5">
        <a href="./">
            <h3 className="hover:text-red-300 hover:scale-120 cursor-pointer transition">Home</h3>
        </a>
        
        <a href="./">
            <h3 className="hover:text-red-300 hover:scale-120 cursor-pointer transition">Top Places</h3>
        </a>
        
        <a href="./">
            <h3 className="hover:text-red-300 hover:scale-120 cursor-pointer transition">Filter</h3>
        </a>
        
      </div>

      {/* Account icon */}
      <div className="flex items-center justify-end gap-2 md:gap-3 md:w-1/4 mt-3 md:mt-0">
        <UserCircle2 className="h-8 w-8 md:h-10 md:w-10 bg-red-100 rounded-full text-gray-700 hover:text-red-300 transition" strokeWidth={0.8} />
        <h1 className="font-light text-xs md:text-sm hidden sm:block">Welcome, Ayush!</h1>
      </div>
    </div>
  )
}

export default Header
