import React from 'react'
import Section1 from './componenets/section 1/Section1'
import Section2 from './componenets/section 2/section2'

const users = [
  {
    img:"https://images.unsplash.com/photo-1788721739597-0fad3ddc7f13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1786709287840-d6de3883ef1f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1789009666152-ac554305c90b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1788270083262-55c5df22ed45?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
const App = () => {
  return (
    <div>
      <Section1 user={users}/>
      <Section2/>
    </div>
  )
}

export default App

