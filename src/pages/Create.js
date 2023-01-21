import React from 'react'
import Certopus from '../photos/Certopus.png'


import './page-styles/Create.css'

import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';

const Create = () => {
  const onSubmit = async(e) => {
    e.preventDefault()


  }

  return (
    <div className=''>
      <div className='flex justify-evenly bg-gradient-to-l from-blue-900 to-purple-400 h-screen'>
        <div className=''>
        <Navbar className='mt-10'>
          <NavItem icon="Display Formats">
            <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
        </div>
        <div className='flex flex-col justify-evenly h-full'>
          <form
              className="flex flex-col gap-2 self-center mt-4 w-full p-16 pt-4 xl:w-5/6items-center justify-center"
              onSubmit={onSubmit}
          >
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl">Organization Name</span>
                  </label>
                  <input
                      type="text"
                      name="certificateOrganization"
                      placeholder="Certificate organization..."
                      className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                      required
                  />
              </fieldset>
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl">Presented to</span>
                  </label>
                  <input
                      type="text"
                      name="presentedTo"
                      placeholder="Presented to..."
                      className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                      required
                  />
              </fieldset>
              <fieldset className="flex flex-col">
                  <label className="label mb-2">
                      <span className="label-text text-2xl">Description</span>
                  </label>
                  <textarea required rows="5" cols="60" name="text" placeholder="Enter text" className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8 h-32"></textarea>
              
              </fieldset>
              <fieldset className="flex flex-col justify-between">
                  <label className="label mb-2">

                  </label>
                  <div className='flex flex-col'>
                    <div className='flex justify-between'>
                    <span className="label-text text-2xl">Organizer Name</span>
                    <input
                        type="text"
                        name="organizerName"
                        placeholder="Organizer Name..."
                        className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
                        required
                    />
                    </div>
                    <div className="flex justify-between">
                    <span className="label-text text-2xl justify-between">Organizer Role</span>
                    <input
                        type="text"
                        name="organizerRole"
                        placeholder="Organizer Role..."
                        className="input input-bordered transition-all duration-150 py-4 px-16 rounded-xl placeholder:text-lg placeholder:text-ellipsis mb-8"
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
      <div className='w-full flex justify-center'>



      </div>
    </div>
  )
  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>
              <img src={Certopus}></img>
            </DropdownItem>
            <DropdownItem goToMenu="settings">
              <img src={Certopus}></img>
            </DropdownItem>
            <DropdownItem>
                <img src={Certopus}></img>
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h2>My Tutorial</h2>
            </DropdownItem>

          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h2>Formats</h2>
            </DropdownItem>
   
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Create