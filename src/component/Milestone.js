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

const Details = ({ logo, title, time, place, info, link }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-6 first:mt-0 last:mb-0 
        w-[60%] xl:w-[80%] mx-auto flex items-start 
        xs:w-full xs:my-4 z-30'>

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className='flex xs:block items-start'
            >
                <Image 
                src={logo} 
                alt="icon" 
                className='mr-8 mb-2 w-[100px] bg-white 
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
                    <p className='font-medium w-full md:text-sm break-words hyphens-auto'>
                        {info}
                    </p>
                    {link && (
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='font-medium w-full mt-1 md:text-sm underline text-primary dark:text-primaryDark'
                        >
                            See more...
                        </a>
                    )}
                </div>
            </motion.div>
        </li>
    );
}

    const Milestone = () => {   
        return (
            <div className='mt-0'>
                <div className='w-full mx-auto'>
                    <ul className="w-full flex flex-col justify-between xs:ml-2 relative">

                        <div
                            className="absolute top-6 w-[4px]  h-[calc(100%-1.5rem)] origin-top
                            border-l-4 border-primary dark:border-primaryDark border-dashed 
                            left-[calc(20%+50px)] 
                            xl:left-[calc(10%+50px)]
                            xs:-left-[20px] xs:top-2 cs:h-[calc(100%-0.5rem)"
                        />

                        <Details
                            logo={iQUT}
                            title="First IT Job - Pure Joy!"
                            time="2024"
                            place="QUT Digital Business Solutions"
                            info="Developed real-world expertise by working with professionals on university IT systems. 
                            This allowed me to apply my skills and contribute to essential infrastructure, as a Technology Support Officer."                   
                        />

                        <Details
                            logo={iTED}
                            title="Logo design winner? That's unexpected!"
                            time="2024"
                            place="TEDxQUT"
                            info="A truly unexpected and exhilarating achievement.
                            This experience validated my creative vision and demonstrated my ability to translate ideas into impactful visual communication."
                            link={'https://youtu.be/hcreQBLOU6E?t=1002'}         
                        />

                        <Details
                            logo={iConnect}
                            title="First Job on Campus, why not?"
                            time="2024"
                            place="QUT HiQ Service Points & Future Students"
                            info="Conducting QUT Connect volunteer recruitment interviews honed my interpersonal and evaluation skills. 
                            I gained valuable experience in assessing potential and building confidence in my own judgment."                   
                        />

                        <Details
                            logo={iBANDS}
                            title="Event Coordinator of a uni club"
                            time="2024"
                            place="QUT Business Analysis and Data Science Club"
                            info="Fostered community and enhancing members' knowledge. Developed strong leadership and organizational 
                            skills, collaborating with diverse teams to create engaging experiences"                   
                        />

                        <Details
                            logo={iQUT}
                            title="Decision Made! The Adventure Begins"
                            time="2023"
                            place="Queensland University of Technology"
                            info="Transitioned into IT, embracing the challenge of a new field and the excitement of continuous learning.
                            Broke through previous limitations, diving into the dynamic world of IT with a global perspective."                   
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
                            The process involved a deliberate exploration of varied methodologies, ultimately leading to a successful outcome."
                            link={'https://link.springer.com/chapter/10.1007/978-3-030-53021-1_53'}                        
                        />

                        <Details
                            logo={iBK}
                            title="Electrical and electronics engineering degrees"
                            time="2014-2021"
                            place="Ho Chi Minh City University of Technology (HCMUT)"
                            info="Completed Bachelor's and Master's degrees in Control and Automation, establishing a strong technical foundation.
                            They provided me with a rigorous academic experience, cultivating analytical skills and a disciplined approach.
                            "
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