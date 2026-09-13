import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://img.icons8.com/3d-fluency/1200/amazon.jpg" alt="" />
       <h4>{props.name}</h4>
       <h3>{props.work}</h3>
        <p>{props.role}</p>
        <div>
         <p>{props.salary}</p><button>apply now</button>
        </div>
    
    </div>
  )
}

export default Card