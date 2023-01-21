import React from 'react'
import HeroPage from '../photos/HeroPage.png'
import './page-styles/Home.css'

import { motion } from 'framer-motion';

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
    exit: {
        y: '-10vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  const textUp = {
    hidden: {
        y: '5vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textSide = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textLeft = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  return (
    <motion.div className='bg-gradient-to-l from-yellow-600 to-white h-screen bg-no-repeat object-cover content-center'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'>
      <div className='flex justify-evenly items-left h-screen'>
        <div className='flex flex-col'>
          <motion.h1 variants={textUp} className='text-8xl text-black mt-48'>Title</motion.h1>
          <motion.h1 variants={textUp} className='text-5xl text-black mt-5'>Description</motion.h1>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          variants={textSide}
          className='bg-black px-16 py-6 rounded-3xl text-7xl text-white mt-10'>Get Started</motion.button>
        </div>
        <div>
          <motion.img variants={textLeft} className='home-image mt-20' src={HeroPage} />
        </div>
      </div>
    </motion.div>
  )
}

export default Home