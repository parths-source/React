import React, { createContext } from 'react'
import { useState } from 'react'
export const ThemeContext=createContext()


const Theme = (props) => {
    const [Th, setTh] = useState("white")
  return (
    <div>
        <ThemeContext.Provider value={[Th,setTh]}>
          {props.children}
        </ThemeContext.Provider>
    </div>
  )
}

export default Theme