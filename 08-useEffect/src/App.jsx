import React, { useEffect, useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(0);
  const [Num2, setNum2] = useState(0);
  useEffect(function(){
    console.log("useeffect ran")
  },[Num])

  return (
    <div>
      <h1>{Num}</h1><br/><h1>{Num2}</h1>
      <button onClick={()=>{
        setNum(Num+1)
      }}> button1</button>
      <button onClick={()=>{
        setNum2(Num2+2)
      }}> button2</button>
    </div>
  )
}

export default App
