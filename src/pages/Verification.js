import React from 'react'
import CancelButton from '../photos/CancelButton.png'
import Cancel2 from '../photos/Cancel2.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CertuaryCertopus from '../photos/CertuaryCertificate.png'
import './page-styles/Verification.css'

const Verification = () => {
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
    <motion.div className='flex justify-evenly items-start mt-20'
    variants={container}
    initial="hidden"
    animate="visible"
    exit="exit">
        <div className='mb-20'>

            <div className=''>
                <img src={CertuaryCertopus} className='certificate-lg w-96'/>
            </div>
            <div className='flex flex-col rounded-2xl p-12 shadow-2xl'>
                <h1 className='text-4xl font-bold text-center'>IgnitionHacks</h1>
                <h1 className='text-3xl mt-12'>Issued to: Name</h1>
                <h1 className='text-3xl mt-12'>'INSERT HASH'</h1>
                <div className='flex justify-between'>
                    <div className=''>
                        <h1 className='text-3xl mt-12'>Issued on</h1>
                        <h1 className='text-3xl mt-12'>January 22nd, 2023</h1>
                    </div>
                    <div className='mr-40'>
                        <h1 className='text-3xl mt-12'>Expires</h1>
                        <h1 className='text-3xl mt-12'>Never</h1>
                    </div>
                </div>
                <h1 className='text-3xl mt-16'>See Certitude on IPFS</h1>
                <Link to="/">
                    <button className="bg-yellow-700 text-white hover:bg-yellow-900 hover:text-white font-bold text-center border-2 border-solid border-yellow-600 px-16 mx-48 mt-12 py-6 rounded-2xl duration-300 transition-colors text-2xl" data-test-id={`navbar-logout`}> Back to Home</button>
                </Link>
            </div>
            
        </div>

    </motion.div>
  )
}

export default Verification