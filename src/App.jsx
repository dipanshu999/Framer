import React from 'react'
import {motion, stagger} from 'framer-motion';
export default function App() {

  const parentVariants={
    visible:{opacity:1, transition:{
      staggerChildren:0.15,
      delayChildren:1,
    }},
    hidden:{opacity:0}
  }

  const childVariants={
    hidden:{opacity:0, y:200},
    visible:{opacity:1,y:0}
  }

  const arr=[1,2,3,4,5,6,7,8]

  return (
    <div className=' bg-[#111] p-10'>
      
      <motion.div 
        className=' pt-20  bg-slate-700 rounded-3xl p-10 flex flex-wrap gap-20 justify-center items-center'
        // animate={{x:1000}} transition={{duration:2,delay:1, ease:2}} 
        // drag dragConstraints={{x:0,y:0}}
        variants={parentVariants} initial="hidden" animate="visible"  transition={{duration:2,delay:1}}
      >

       { 
       arr.map((item,index)=>{
        return (<motion.div key={index} variants={childVariants}  className='child w-44 h-44 rounded-2xl  bg-yellow-200'>
                </motion.div>
               )
       })
        
        }
      </motion.div>
    </div>
  )
}
