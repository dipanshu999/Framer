import React from 'react'
import {motion} from 'framer-motion';
export default function App() {
  return (
    <div className='h-screen bg-[#111] p-10'>
      
      <motion.div 
        className='h-40 w-40 bg-red-300 rounded-3xl'
        // animate={{x:1000}} transition={{duration:2,delay:1, ease:2}} 
        drag dragConstraints={{x:0,y:0}}
        >

      </motion.div>
    </div>
  )
}
