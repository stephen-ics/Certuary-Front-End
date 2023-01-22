import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Verified from './pages/Verified'
import Unverified from './pages/Unverified'
import Verification from './pages/Verification'

import './App.css';


function App() {
  return (
    <div className="App bg-white">
    <BrowserRouter>
        <Suspense fallback={<div>Page Loading...</div>}>
        <Navbar />
        <AnimatePresence
         mode='wait'>
           <Routes>
             <Route path="/" exact element={<Home />} />
             <Route path="/create" exact element={<Create />} />
             <Route path="/verified" exact element={<Verified />} />
             <Route path="/unverified" exact element={<Unverified />} />
             <Route path="/verification" exact element={<Verification />} />
           </Routes>
        </AnimatePresence>
        </Suspense>
    </BrowserRouter>
  </div>
  );
}

export default App;
