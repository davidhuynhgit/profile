import React, {useRef}from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import iQUT from "../../public/images/milestones/QUT.png"
import iBK from "../../public/images/milestones/BK.png"
import iSistech from "../../public/images/milestones/Sistech.png"
import iConnect from "../../public/images/milestones/Connect.png"
import iHamon from "../../public/images/milestones/Hamon.png"
import iBANDS from "../../public/images/milestones/QUTBANDS.png"
import iTED from "../../public/images/milestones/TEDxQUT.png"
import iLHP from "../../public/images/milestones/LHP.png"
// import iSpringer from "../../public/images/milestones/Springer.png"

const Details = ({ logo, title, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-6 first:mt-0 last:mb-0 w-[60%] mx-auto flex  items-start 
        md:w-[80%]  xs:w-full z-30'>

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className='flex items-start'
            >
                <Image 
                src={logo} 
                alt="icon" 
                className='mr-4 w-[50px] h-[50px] bg-white 
                border   border-dark dark:border-light'
                priority
                />
                <div className="flex flex-col">
                    <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                        {title}
                    </h3>
                    <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                        {time} {place && `| ${place}`}
                    </span>
                    <p className='font-medium w-full md:text-sm'>
                        {info}
                    </p>
                </div>

            </motion.div>
        </li>
    );
}

    const Milestone = () => {   
        return (
            <div className='mt-0'>
                <div className='w-[75%] mx-auto  lg:w-[90%] md:w-full'>
                    <ul className="w-full flex flex-col justify-between ml-4 xs:ml-2 relative">

                        <motion.div
                            className="absolute top-7 w-[4px]  h-[calc(100%-1.75rem)] origin-top
                            border-l-4 border-primary dark:border-primaryDark border-dashed 
                            md:left-[calc(10%+25px)] xs:left-[25px]
                            left-[calc(20%+25px)]"
                        />

                        <Details
                            logo={iQUT}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                        <Details
                            logo={iBANDS}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                        <Details
                            logo={iBK}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                        <Details
                            logo={iQUT}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                        <Details
                            logo={iBANDS}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                        <Details
                            logo={iBK}
                            title="Online Coursework"
                            time="2016-2020"
                            place="Coursera And EdX"
                            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."
                        />
                    </ul>
                </div>
            </div>
        );
    };
    

export default Milestone