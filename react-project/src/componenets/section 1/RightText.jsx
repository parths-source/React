import React from 'react'
import RightCard from './RightCard'

const RightText = ({ user }) => {
  return (
        <div className="bg-gray-50 h-full w-3/4 overflow-x-auto">
            <RightCard user={user}/>
        </div>
  )
}

export default RightText