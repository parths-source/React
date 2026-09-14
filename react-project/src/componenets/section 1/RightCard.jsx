import React from 'react'

const RightCard = ({ user }) => {
  return (
    <div className='flex bg-white shrink-0 rounded-4xl h-full w-1/3 px-3 py-7'>
        {user.map((item, index) => (
          <img className='rounded-4xl' key={index} src={item.img} alt="" />
        ))}

    </div>
  )
}

export default RightCard