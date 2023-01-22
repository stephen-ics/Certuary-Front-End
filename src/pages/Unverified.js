import React from 'react'
import CancelButton from '../photos/CancelButton.png'
import Cancel2 from '../photos/Cancel2.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Unverified = () => {
    const container = {
        hidden: {
            y: '-5vh',
            opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            staggerChildren: 0.35,
            duration: 0.5,
          },
        },
        exit: {
          y: '-10vh',
          opacity: 0,
          transition: {
            duration: 2.5,
          }
        },
      };
    
  return (
    <motion.div className='bg-gradient-to-l h-screen flex justify-center items-center flex-col'
    variants={container}
    initial="hidden"
    animate="visible"
    exit="exit">
        <img src={Cancel2} className='w-96' />
        <h1 className='font-bold text-6xl text-center w-2/3'>This certificate has failed to be verified.</h1>
        <Link to="/">
            <button className="bg-yellow-700 text-white hover:bg-yellow-900 hover:text-white font-bold text-center border-2 border-solid border-yellow-600 px-16 m-10 py-6 rounded-2xl duration-300 transition-colors text-2xl" data-test-id={`navbar-logout`}> Back to Home</button>
        </Link>
        <hi className='text-3xl text-center w-1/2 mb-40'> As we are partnered with Estuary, anything that is sent through can by verified with Estuary</hi>
    </motion.div>
  )
}

export default Unverified