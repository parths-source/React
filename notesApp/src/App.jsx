import React,{useState}from 'react'

const App = () => {
  const [obj, setobj] = useState({title:"" ,note:""})
  const notes=(elem)=>{
    elem.preventDefault();
    console.log(`your title is${obj.title} and note is ${obj.note}`)
    setobj("")

  }
  return (
    <div className="h-screen bg-black text-white" >
      <form onSubmit={notes} className='flex flex-col gap-1 '>
        <input onChange={(e)=>{
          setobj({...obj,title:e.target.value})
        }}  className="h-15 m-2 font-bold align-middle text-2xl w-1/3 px-6 border-2 rounded-2xl" input="text" placeholder="enter your title"></input><br/>
        <textarea onChange={(e)=>{
          setobj({...obj,note:e.target.value})
        }}  className='text-4xl mx-2 font-bold align-middle h-30 w-1/3 px-6 border-2 rounded-2xl' placeholder='enter your notes'></textarea>
        <button className='rounded-2xl mx-2 my-4 p-2 bg-amber-50 text-black font-bold border-2 w-1/3 justify-center'>sumbit</button>
      </form>
    </div>
  )
}

export default App
