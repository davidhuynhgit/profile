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
import iSpringer from "../../public/images/milestones/Springer.png"

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
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience."                   
                        />

                        <Details
                            logo={iTED}
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience.
                            <a href='https://www.tedxqut.com/events' target='_blank'>
                                Check this out.
                            </a>"                   
                        />

                        <Details
                            logo={iConnect}
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience."                   
                        />


                        <Details
                            logo={iBANDS}
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience."                   
                        />

                        <Details
                            logo={iQUT}
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience."                   
                        />

                        <Details
                            logo={iHamon}
                            title="Involvement in a Complex National Energy Project"
                            time="2021"
                            place="Hamon Vietnam"
                            info="Gained significant experience in Instrument & Control (I&C) through direct collaboration with seasoned professionals. 
                            This exceptional opportunity allowed me to expand my knowledge base and learn from international colleagues with extensive field experience."                   
                        />

                        <Details
                            logo={iSistech}
                            title="Entry into the Professional Field"
                            time="2020"
                            place="SISTECH Co., Ltd"
                            info="Successfully transitioned from academic studies to my first professional role at SISTECH. 
                            This position allowed me to apply my skills in automation engineering through practical projects.
                            I also developed teaching methodologies in our training courses for partners and customers."                   
                        />

                        <Details
                            logo={iSpringer}
                            title="International research publication"
                            time="2019"
                            place=""
                            info="Achieved publication through a collaborative research effort, showcasing my ability to contribute to original work. 
                            The process involved a deliberate exploration of varied methodologies, ultimately leading to a successful outcome.                            
                            <a href='https://link.springer.com/chapter/10.1007/978-3-030-53021-1_53' target='_blank'>
                                Check this out.
                            </a>"                       
                        />

                        <Details
                            logo={iBK}
                            title="Electrical and electronics engineering degrees"
                            time="2014-2021"
                            place="Ho Chi Minh City University of Technology (HCMUT)"
                            info="Completed Bachelor's and Master's degrees in Control and Automation, establishing a strong technical foundation.
                            They provided me with a rigorous academic experience, cultivating analytical skills and a disciplined approach.
                            These qualities remain central to my professional and personal growth."
                        />
                        
                        <Details
                            logo={iLHP}
                            title="High School (for the Gifted)"
                            time="2011-2014"
                            place="Lê Hồng Phong High School for the Gifted"
                            info="My time at a leading high school presented significant challenges, demanding resilience and determination.
                            I learned to advocate for myself, fostering a strong sense of independence."
                        />
                    </ul>
                </div>
            </div>
        );
    };
    

export default Milestone