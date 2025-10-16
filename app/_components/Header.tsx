import React from 'react'
import {User, UserCircle, UserCircle2} from 'lucide-react'

function Header() {
  return (
    <div className='bg-white h-18 shadow-md flex justify-evenly gap-2'>
        {/* Logo and Name  */}

        <div className='w-1/4 h-full flex items-center '>
            {/* img logo */}
            <img src="./destination.png" className='ml-2 w-10 h- 10' alt="" />
            {/* div for text and heading */}
            <div className='ml-4 h-full  flex flex-col gap-1 justify-center'>
                <h1 className='font-normal text-2xl'>Trip Finder</h1>
                <h1 className='font-light text-xs'>Making easier to choose places</h1>
            </div>
            
        </div>

        {/* Menu  */}

        <div className='w-1/4 h-full font-normal flex justify-center items-center gap-20'>
                <h3>Login</h3>
                <h3>Top Places</h3>
                <h3>Filter</h3>
        </div>

        {/* Account icon  */}

        <div className='w-1/4 h-full flex justify-end '>
            <div className='w-3/4 h-full mr-10 flex flex-col items-end justify-center gap-1'>
                <UserCircle2 className='h-10 w-10 mr-6' strokeWidth={.7}/>
                <h1 className='font-light text-xs '>Welcome, Ayush</h1>
            </div>
                
        </div>

    </div>
  )
}

export default Header