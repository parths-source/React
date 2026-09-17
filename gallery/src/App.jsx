import axios from 'axios'
import { useState,useEffect } from 'react'

const App = () => {
  const [User, setUser] = useState([]);
  const [idx, setidx] = useState(1)
  const getData=async()=>{
    const res=await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=15`);
    setUser(res.data);
  }
  useEffect(function(){
    getData();
  },[idx])  

  let userData="not available";

  if(User.length>0) {
    userData=User.map(function(elem){
      return(
        <div className="">
          <img className="h-50 w-50 rounded-xl" src={elem.download_url} alt=""/>
          <h2 className="text-white font-bold">{elem.author}</h2>
        </div>
      )
    })
  }

  return (
    <div className=" m-4">
      <div className="flex flex-wrap gap-4 ">
        {userData} 
      </div>
      <div className='flex align-middle justify-center gap-5'>
        <button onClick={()=>{
          setidx(idx-1);
        }} className="bg-yellow-400 text-black-200 p-2 rounded-lg ">prev</button>
        <h1 className='text-yellow-300'>Page:{idx}</h1>
        <button onClick={()=>{
          setidx(idx+1);
        }} className='bg-yellow-400 text-black-200 p-2 rounded-lg '>next</button>
      </div>
    </div>
  )
}

export default App
