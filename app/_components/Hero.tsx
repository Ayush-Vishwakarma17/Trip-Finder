import React from 'react'

function Hero() {
  return (
    <div className='white flex p-12 justify-center'>
        {/* content */}
        <div className='flex flex-col items-center gap-4 justify-center'>
            <h1 className='text-2xl'>Hey!</h1>
            <p className='text-md sm:text-2xl  text-center'>I will help you to find some places to visit <span className='text-red-300 font-bold text-xl sm:text-4xl'>According to your Prefference!</span></p>
        </div>
    </div>
  )
}

export default Hero