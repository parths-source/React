import React from 'react'
import Navbar from './Navbar'
import PageCont from './PageCont'
const Section1 = ({ user }) => {
  return (
    <>
    <div className="height-full h-screen bg-white">
        <Navbar/>
        <PageCont user={user}/>
    </div>  
    </>
  )
}

export default Section1