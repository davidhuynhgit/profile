import Head from 'next/head'
import React from 'react'
import TransitionEffect from '@/component/TransitionEffect'
import Layout from '@/component/Layout'
import AnimatedText from '@/component/AnimatedText'
import Milestone from '@/component/Milestone'

const milestone = () => {
  return (
    <>
    <Head>
      <title>David Huynh | Milestones</title>
      <meta name="description" content="DavidHuynh's Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <TransitionEffect/>
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="py-16">
          <AnimatedText text="Milestones Of Growth" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <Milestone />
        </Layout>
      </main>
    </>
  )
}

export default milestone