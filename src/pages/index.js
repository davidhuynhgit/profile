import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/component/Layout'
import profilePic from "../../public/images/profile/IndexPhoto.png"
import QRPic from "../../public/images/profile/QR.png"
import AnimatedText from '@/component/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/component/Icon'
import TransitionEffect from '@/component/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>David Huynh | Home</title>
        <meta name="description" content="DavidHuynh's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="David" className='w-full h-auto md:inline-block md:w-full'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Unleash The Power Of Data To Drive Smart Decisions." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>            
              <p className='my-4 text-base font-medium'>
              As a passionate data analyst/engineer with an automation engineering background, I specialize in extracting meaningful insights through data mining, machine learning, and advanced analytics. 
              Explore my latest projects, where I blend programming expertise with analytical precision to solve complex problems.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume.pdf" target={"_blank"}
                  className ="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:davidhuynh.connect@gmail.com"
                className='ml-4 text-lg font-medium capitalize 
                text-dark underline dark:text-light
                md:text-base'
                >Contact</Link>              
              </div>

              <div className='w-full justify-items-end 
              lg:justify-items-center lg:mt-6 '>
                <div className='flex flex-col items-center'>
                  <Image 
                    src={QRPic} 
                    alt="David" 
                    className='border border-dark'
                    priority
                    width={180} 
                    height={180} 
                  />
                  <p className='p-2 text-dark dark:text-light font-bold text-lg'>
                    Scan & Share
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
