import React from 'react'
import Certopus from '../photos/Certopus.png'
import CertuaryCertopus from '../photos/CertuaryCertificate.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './page-styles/Create.css'
import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import Loading from 'react-loading-components';

const Create = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [organizerName, setOrganizerName] = useState(null);
  const [organizerRole, setOrganizerRole] = useState(null);


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

  const handleSubmit = async(e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({behavior: 'smooth'});

    const name = e.target.presentedTo.value
    const description = e.target.description.value
    const company_name = e.target.certificateOrganization.value
    const organizer_name = e.target.organizerName.value
    const organizer_role = e.target.organizerRole.value

    const certificate = {name, description, company_name, organizer_name, organizer_role};

    setName(name);
    setDescription(description);
    setCompanyName(company_name);
    setOrganizerName(organizer_name);
    setOrganizerRole(organizer_role);

    setLoading(true);
    
    fetch('http://localhost:3002/CompletedSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(certificate)
    })
  }

  const handleSubmit2 = async(e) => {
    const certificate = {name, description, companyName, organizerName, organizerRole};
        
    fetch('http://localhost:3002/CompletedSection', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(certificate)
    })
  }

  const ref = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setCertificateData(data);
        });
    }, []);

    const [loading, setLoading] = useState(false);
    const [showImage, setShowImage] = useState(false);


  

  return (
    <motion.div className='' variants={container} 
      initial='hidden' 
      animate='visible' 
      exit='exit'>
      <div className='flex justify-evenly h-screen'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-6xl font-bold mb-8'>Create Certificate</h1>
          <img src={CertuaryCertopus} className='certificate mb-24'></img>
        </div>
        <div className='flex flex-col justify-evenly h-full'>
          <form
              className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6items-center justify-center"
              onSubmit={handleSubmit}
              
          >
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl font-bold">Organization Name</span>
                  </label>
                  <input
                      type="text"
                      name="certificateOrganization"
                      placeholder="Certificate organization..."
                      className="input input-bordered transition-all duration-150 py-4 px-16 border-2 border-black rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                      required
                  />
              </fieldset>
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl font-bold">Presented to</span>
                  </label>
                  <input
                      type="text"
                      name="presentedTo"
                      placeholder="Presented to..."
                      className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl border-2 border-black placeholder:text-lg placeholder:text-ellipsis mb-8"
                      required
                  />
              </fieldset>
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl font-bold">Description</span>
                  </label>
                  <textarea required rows="5" cols="60" name="description" placeholder="Enter text" className="border-2 border-black input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8 h-32"></textarea>
              
              </fieldset>
              <fieldset className="flex flex-col justify-between">
                  <label className="label mb-2">

                  </label>
                  <div className='flex flex-col'>
                    <div className='flex justify-between'>
                    <span className="label-text text-2xl font-bold">Organizer Name</span>

                    <input
                        type="text"
                        name="organizerName"
                        placeholder="Organizer Name..."
                        className="input border-2 border-black input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                        required
                    />

                    </div>
                    <div className="flex justify-between">
                    <span className="label-text text-2xl justify-between font-bold">Organizer Role</span>
                    <input
                        type="text"
                        name="organizerRole"
                        placeholder="Organizer Role..."
                        className="input input-bordered border-2 border-black transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                        required
                    />
                    </div>
                    
                  </div>
              </fieldset>

             
              <input
                type="submit"
                className="rounded-xl p-4 text-white bg-zinc-800 active:bg-zinc-600 transition-all duration-75 font-bold cursor-pointer px-36 py-8"
                value="Submit"
                
              />
      
          </form>
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div ref={ref} className=''></div>
        {loading && <Loading type='tail_spin' width={600} height={500} fill='#f44242' className='' />}
        {showImage && <img src={CertuaryCertopus} ref={ref} className='certificate-lg'></img>}
        {showImage &&         
          <input
            type="submit"
            className="rounded-xl p-4 text-white bg-zinc-800 active:bg-zinc-600 transition-all duration-75 font-bold cursor-pointer px-36 py-8 my-20"
            value="Submit"
            onClick={handleSubmit2}
          />}


      </div>
    </motion.div>
  )
}

export default Create