import React from 'react'
const App = () => {
  return (
    <div className='text-amber-50 text-6xl'>
      <button onClick={()=>{
        console.log("hello");

      }} className='bg-white text-black'>button</button>

      <input onChange={(elem)=>{
        console.log(elem.target.value)

      }}className='bg-amber-50 text-black'></input>
    </div>
  )
}

export default App
