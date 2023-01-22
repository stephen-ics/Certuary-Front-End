import React from 'react'
import HeroPage from '../photos/HeroPage.png'
import './page-styles/Home.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'

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
        staggerChildren: 0.5,
        
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
            duration: 1.5,
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
        opacity: 1,
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
            duration: 1.5,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  return (
    <motion.div className='h-screen bg-no-repeat object-cover content-center'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'>
      <div className='flex justify-evenly items-left h-screen'>
        <div className='flex flex-col'>
          <motion.div className='flex' variants={textUp}>
          <motion.h1 className='text-7xl font-black mt-48 text-yellow-700'>Certuary</motion.h1>
          <motion.h1 className='text-7xl text-black mt-48 ml-8'>can help you</motion.h1>
          </motion.div>
            <motion.div className='text-7xl mt-5 text-pink-400'>
            <Typewriter
                  options={{
                    strings:[],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2500)
                      .typeString("Design")
                      .deleteAll()
                      .typeString("Verify")
                  }}
                />
              </motion.div>
            <motion.h1 variants={textUp} className='text-7xl text-blqack mt-5'>Certificates</motion.h1>
            <Link to='/create'>
              <motion.button 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                variants={textUp}
                className='bg-yellow-700 text-white hover:bg-yellow-900 hover:text-white font-bold text-6xl text-center border-2 border-solid border-yellow-600 px-16 mt-12 py-6 rounded-2xl duration-300 transition-colors text-2xl" data-test-id={`navbar-logout`}'>Get Started
              </motion.button>
            </Link>
        </div>
        <div>
          <motion.img variants={textLeft} className='certificate mt-36' src={HeroPage} />
        </div>
      </div>
    </motion.div>
  )
}

export default Home