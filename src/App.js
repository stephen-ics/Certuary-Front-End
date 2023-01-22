import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'

import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Suspense fallback={<div>Page Loading...</div>}>
        <Navbar />
        <AnimatePresence
         mode='wait'>
           <Routes>
             <Route path="/" exact element={<Home />} />
             <Route path="/create" exact element={<Create />} />
           </Routes>
        </AnimatePresence>
        </Suspense>
    </BrowserRouter>
  </div>
  );
}

export default App;
