import React from 'react'
import CancelButton from '../photos/CancelButton.png'
import Cancel from '../photos/Cancel.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Verified = () => {
    const container = {
        hidden: {
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
            
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
  return (
    <motion.div className='bg-gradient-to-l h-screen flex justify-center items-center flex-col'
    variants={container}
    initial="hidden"
    animate="visible"
    exit="exit">
        <img src={Cancel} className='w-96' />
        <h1 className='font-bold text-6xl text-center w-2/3'>This certificate has failed to be verified.</h1>
        <Link to="/">
            <button className="bg-white text-black hover:bg-yellow-900 hover:text-white font-bold text-center border-2 border-solid border-yellow-600 px-16 m-10 py-6 rounded-2xl duration-300 transition-colors text-2xl" data-test-id={`navbar-logout`}> Back to Home</button>
        </Link>
        <hi className='text-3xl text-center w-1/2'> As we are partnered with Estuary, anything that is sent through can by verified with Estuary</hi>
    </motion.div>
  )
}

export default Verified