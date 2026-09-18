import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Link to ='/contact/sales'>Sales</Link>
      <Link to ='/contact/force'>Force</Link>
    </div>
  )
}

export default Contact