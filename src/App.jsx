import React from 'react'
import {motion, useScroll} from 'framer-motion';
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

  const {scrollYProgress}=useScroll();
  console.log(scrollYProgress)

  return (
    <div className=' bg-[#111] '>
      <motion.div style={{scaleX:scrollYProgress}} className={`h-2 w-full bg-red-500 fixed origin-left `} ></motion.div>
      
      <div className='p-10'>
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


      <div className='bg-yellow-300 w-full h-screen'>
          <div className="textBox p-20 text-4xl ">
            <p>  recusandae facilis, totam, optio, debitis nam voluptas maxime tempora. Natus vitae totam modi, hic facere blanditiis. Delectus voluptas libero sed odit dolorem quisquam quasi, perferendis saepe. Similique necessitatibus quisquam quas eius error, veniam, architecto aliquid dolor cumque nulla vitae distinctio excepturi! Delectus similique autem minima at. Nesciunt perspiciatis tenetur repudiandae obcaecati dolore ipsum adipisci veniam et sequi ducimus praesentium eius omnis non deleniti aspernatur blanditiis ut cupiditate officia ad quidem eos, illum voluptates. Provident, iure, delectus praesentium nostrum suscipit libero quidem, exercitationem hic maxime unde illo.</p>
          </div>
      </div>
      
      <div className='bg-lime-300 w-full h-screen'>
          <div className="textBox p-20 text-4xl ">
            <p>  recusandae facilis, totam, optio, debitis nam voluptas maxime tempora. Natus vitae totam modi, hic facere blanditiis. Delectus voluptas libero sed odit dolorem quisquam quasi, perferendis saepe. Similique necessitatibus quisquam quas eius error, veniam, architecto aliquid dolor cumque nulla vitae distinctio excepturi! Delectus similique autem minima at. Nesciunt perspiciatis tenetur repudiandae obcaecati dolore ipsum adipisci veniam et sequi ducimus praesentium eius omnis non deleniti aspernatur blanditiis ut cupiditate officia ad quidem eos, illum voluptates. Provident, iure, delectus praesentium nostrum suscipit libero quidem, exercitationem hic maxime unde illo.</p>
          </div>
      </div>

      <div className='bg-blue-200 w-full h-screen'>
          <div className="textBox p-20 text-4xl ">
            <p>  recusandae facilis, totam, optio, debitis nam voluptas maxime tempora. Natus vitae totam modi, hic facere blanditiis. Delectus voluptas libero sed odit dolorem quisquam quasi, perferendis saepe. Similique necessitatibus quisquam quas eius error, veniam, architecto aliquid dolor cumque nulla vitae distinctio excepturi! Delectus similique autem minima at. Nesciunt perspiciatis tenetur repudiandae obcaecati dolore ipsum adipisci veniam et sequi ducimus praesentium eius omnis non deleniti aspernatur blanditiis ut cupiditate officia ad quidem eos, illum voluptates. Provident, iure, delectus praesentium nostrum suscipit libero quidem, exercitationem hic maxime unde illo.</p>
          </div>
      </div>

      <div className='bg-orange-200 w-full h-screen'>
          <div className="textBox p-20 text-4xl ">
            <p>  recusandae facilis, totam, optio, debitis nam voluptas maxime tempora. Natus vitae totam modi, hic facere blanditiis. Delectus voluptas libero sed odit dolorem quisquam quasi, perferendis saepe. Similique necessitatibus quisquam quas eius error, veniam, architecto aliquid dolor cumque nulla vitae distinctio excepturi! Delectus similique autem minima at. Nesciunt perspiciatis tenetur repudiandae obcaecati dolore ipsum adipisci veniam et sequi ducimus praesentium eius omnis non deleniti aspernatur blanditiis ut cupiditate officia ad quidem eos, illum voluptates. Provident, iure, delectus praesentium nostrum suscipit libero quidem, exercitationem hic maxime unde illo.</p>
          </div>
      </div>

    </div>
  )
}
