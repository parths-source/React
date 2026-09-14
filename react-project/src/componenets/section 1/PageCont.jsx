import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const PageCont = ({ user }) => {
  return (
    <div className='flex py-3 px-10 gap-20 items-center bg-white h-[80vh]'>
        <LeftText/>
        <RightText user={user}/>
    </div>
  )
}

export default PageCont