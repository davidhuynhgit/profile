import AnimatedText from '@/component/AnimatedText'
import Layout from '@/component/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { GithubIcon } from '@/component/Icon'
import fproject from "https://github.com/davidhuynhgit/AdvanceQLD/blob/main/graphics/Thumbnail.png"
import {motion} from "framer-motion"
import TransitionEffect from '@/component/TransitionEffect'
const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-full flex items-center justify-between relative
    rounded-3xl  border border-solid border-dark bg-light shadow-2xl p-12 
    dark:bg-dark dark:border-light dark:shadow-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
      <Link 
      href={link} 
      target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage
          src={img} alt={title} 
          className="w-full h-auto"
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>  

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-2xl'>{type}</span>
        <Link href={link} target="_blank" 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>  
        <Link href={link} target="_blank"
        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
        dark:text-dark dark:bg-light
        sm:px-4 sm:text-base'>
        Visit Project</Link>  
        </div>
        
      </div>
    </article>

  )
}

const Project = ({type, title, img, link, github}) => {
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative shadow-2xl
     dark:bg-dark dark:border-light dark:shadow-light xs:p-4'>
      <Link 
      href={link} 
      target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage  src={img} alt={title} className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}/>
      </Link>  

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target="_blank" 
        className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        
        <div className='w-full mt-2 flex items-center justify-between'>
        
        <Link 
        href={link} 
        target="_blank"
        className='text-lg font-semibold underline md:text-base'>
        Visit</Link>  
        <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>  
        </div>
        
      </div>
    </article>

  )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>David Huynh | Projects</title>
            <meta name="description" content='any description'/>
        </Head>
        <TransitionEffect/> 
        <main className='w-full flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText 
                text="From Knowledge to Action!"
                className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <div className="mb-16 grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                  <div className="col-span-12">

                    <FeaturedProject 
                    title="Advance Queensland program"
                    img={fproject}
                    summary="A story reporting on the success of the program initiated by the Queensland's Government.
                     The results are potentially critical to the scheme, based on the publicly available data on the distribution of the funds over time. 
                     It is expected that by using JupyterNotebook/Python and Guadian API with structured and unstructured data analysis under QDAVI framework,
                     the patterns or concerns could be revealed to provide meaningful insights."                    
                    link="https://github.com/davidhuynhgit/AdvanceQLD"
                    github="https://github.com/davidhuynhgit/AdvanceQLD"
                    type="Featured Project "
            
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Crypto Screener Application"
                    img={project1}                            
                    link="/"
                    github="/"
                    type="Featured Project "
                    />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Crypto Screener Application"
                    img={project1}                            
                    link="/"
                    github="/"
                    type="Featured Project "
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Crypto Screener Application"
                    img={project1}                            
                    link="/"
                    github="/"
                    type="Featured Project "
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-12">
                  <Project 
                    title="Crypto Screener Application"
                    img={project1}                            
                    link="/"
                    github="/"
                    type="Featured Project "
                    />
                  </div>

                </div>
                
            </Layout>
        </main>
    </>
  )
}

export default projects