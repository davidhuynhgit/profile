import React, {useRef}from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} offset={["start end", "end 80%"]}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp;
            <a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark'>
            <span className="block">@{company}</span>
            </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    )
  return (

    <div className='my-16'>
        <h2 className='font-bold text-8xl mb-16 w-full text-center
        md:text-6xl xs:text-4xl md:mb-8'>
            Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        
        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
                    position="Assistant Technology Support Officer"
                    company="Queensland University of Technology (QUT)"
                    time="2024"
                    address="88 Musk Avenue, Kelvin Grove Qld 4059"
                    work="Worked on a team responsible for integrating desktop computing with research instrumentation, 
                    deploying and supporting software and hardware in specialized labs, 
                    and troubleshooting issues across the campus."
            />

            <Details
                    position="Automation Engineer"
                    company="SISTECH Co., Ltd"
                    time="2020-2023"
                    address="55/14 Le Thi Hong Gam, Nguyen Thai Binh Ward, District 1, HCMC, Vietnam"
                    work="contributed to several projects, including upgrading outdated systems, troubleshooting and resolving 
                    device malfunctions, and commissioning and controlling various instruments and subsystems to enhance overall operational efficiency."
            />
            <Details
                    position="Automation Engineer (Intern)"
                    company="SISTECH Co., Ltd"
                    time="2018"
                    address="55/14 Le Thi Hong Gam, Nguyen Thai Binh Ward, District 1, HCMC, Vietnam"
                    work="Led a team of interns focused on software analysis and process evaluation to 
                    complete a project automating a manufacturing process, improving efficiency and streamlining operations."
            />
            </ul>

     

        </div>
    </div>


  )
}

export default Experience
