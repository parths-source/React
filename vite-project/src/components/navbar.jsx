import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=" flex justify-between  bg-blue-950">
      <h1 className='text-2xl text-white font-bold m-4'>NCPL</h1>

      <div className='flex gap-3'>
        <Link to='/'className='text-xl text-white font-bold m-4' >Home</Link>
        <Link to='/about'className='text-xl text-white font-bold m-4'>About</Link>
        <Link to='/contact'className='text-xl text-white font-bold m-4'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar