import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './home'
import About from './about'
import Contact from './contact'
import Not from './not'
import Sales from './sales'
import Force from './force'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}>
           <Route path ='sales' element={<Sales/>}/>
           <Route path ='force' element={<Force/>}/>
        </Route>
        <Route path='*' element={<Not />} />
      </Routes>
    </div>
  )
}

export default App
