import { Check } from 'lucide-react'
import React, {useState}from 'react'

const App = () => {
  const [Title, setTitle] = useState("")
  const check=(elem)=>{
    elem.preventDefault(); 
    console.log("form submitted",Title);
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(elem=>{
        check(elem);
      })}>
        <input value={Title} onChange={(elem)=>{
          setTitle(elem.target.value);
        }} type='text' placeholder='write your name'></input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
