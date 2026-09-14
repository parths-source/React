import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftText = () => {
  return (
    <div className=" flex flex-col py-3 justify-between bg-white h-full w-2/5 text-5xl font-bold">
        <div className='p-4'>
            <h1><span>Projpective<br/> Segmentation<br/> Customer</span></h1>  
        </div>
        <p className='text-lg font-light px-4 py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae numquam consectetur architecto vel saepe ab quisquam placeat commodi! Deserunt ipsa dolore, quos amet veniam consequuntur consequatur!</p>
        <div className=" h-6">
           <ArrowUpRight />
        </div>
    </div>
  )
}

export default LeftText