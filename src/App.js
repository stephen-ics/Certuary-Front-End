import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Verified from './pages/Verified'
import Unverified from './pages/Unverified'

import './App.css';


function App() {
  return (
    <div className="App bg-gradient-to-l from-yellow-600 to-white">
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
           </Routes>
        </AnimatePresence>
        </Suspense>
    </BrowserRouter>
  </div>
  );
}

export default App;
