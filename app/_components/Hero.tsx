import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='white flex p-12 justify-center flex-col'>
        {/* content */}

        <div className='flex flex-col items-center gap-4 justify-center'>
            <h1 className='text-2xl'>Hey!</h1>
            <p className='text-md sm:text-2xl  text-center'>I will help you to find some places to visit <span className='text-red-300 font-bold text-xl sm:text-5xl'>According to your Prefference!</span></p>
        </div>

        {/* input Box */}
        <div className=' w-full p-4 mt-20 flex justify-center items-center  '>
          <div className='h-full w-1/2 flex jusity-center items-center  relative rounded-2xl shadow-sm relative'>
              <Textarea placeholder='Write your type of place for the suggestions...' className='h-30 focus-visible:ring-0 border-none shadow-none resize-none'/>
              
              <Send className=' h -10 w-10 absolute bottom-6 right-6' strokeWidth={.8}/>
          </div>
        </div>
    </div>
  )
}

export default Hero