import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name}) => {
  return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer  dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  text-nowrap mx-1 my-3' 
      whileHover={{scale:1.1}}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5}}
      >
          {name}
      </motion.div>
  )
}

const SkillSet = ({ skills, bgColor }) => {
  return (
    <div className="w-max flex rounded-full flex-wrap justify-center mb-8 mx-auto px-2"
      style={{ backgroundColor: bgColor }}
    >
      {skills.map((skill, index) => (
        <Skill key={index} name={skill} />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillSets = [
    {
      bgColor: '#16C47F', // Add custom background colors for each set
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS']
    },
    {
      bgColor: '#FF9D23',
      skills: ['Web Design', 'Database', 'Tailwind CSS', 'Node.js']
    },    
    {
      bgColor: '#F93827',
      skills: ['Web Design', 'Database', 'Tailwind CSS', 'Node.js']
    },
    // Add more skill sets as needed
  ];

  return (
    <>
      <h2 className='font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt-16 mb-16'>Skills</h2>
      {skillSets.map((skillSet, index) => (
        <SkillSet key={index} skills={skillSet.skills} bgColor={skillSet.bgColor} />
      ))}
    </>
  );
};

export default Skills;
