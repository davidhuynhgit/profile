import React, {useRef}from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);


    return (
        
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {info}
            </p>
        </motion.div>
    </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center center"]
        }
    )
  return (

    <div className='my-16'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16
        '>Education</h2>
        

        <div ref={ref} className='w-[75%] mx-auto relative  lg:w-[90%] md:w-full'>
        
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
            type="Master Of Information Techonology - Data Science"
            time="2023-2024"
            place="Queensland University of Technology (QUT)"
            info="Achieved High Distinction GPA and received the QUT Executive Dean's Commendation for Academic Excellence. 
            Relevant courses included Artificial Intelligence, Machine Learning, Data Mining, and Analytics. Completed capstone projects focused on predictive modeling with real-world datasets."
            />
            <Details
            type="Master of Engineering - Control Engineering & Automation"
            time="2018-2021"
            place="Ho Chi Minh City University of Technology"
            info="Specialized in advanced control engineering with a focus on parameter estimation and adaptive control for underwater robots.
            Developed expertise in advanced control methodologies, including optimal, robust, and nonlinear control, alongside system identification techniques."
            />
            <Details
            type="Bachelor of Engineering - Control Engineering & Automation (Honor)"
            time="2014-2018"
            place="Ho Chi Minh City University of Technology"
            info="Studied fundamentals of electronics and electrical engineering, with a specialization in industrial automation and control engineering. 
            Developed a strong foundation in designing and implementing automated systems for industrial applications."
            />
            </ul>
        </div>
    </div>


  )
}

export default Education
