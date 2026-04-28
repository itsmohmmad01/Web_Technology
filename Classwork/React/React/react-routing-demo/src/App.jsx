import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
