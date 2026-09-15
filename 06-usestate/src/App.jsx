import React,{useState}from 'react'

const App = () => {
  const [user, setuser] = useState({name:"Parth ", age:20});
  const destructure=()=>{
    const newuser={user};
    newuser.age=19;
    newuser.name="vertika";
    setuser(newuser);
    
  }
  return (
    <div className="text-amber-50">
      <h1 className=" border-black">{user.age}<br/>{user.name}</h1>
    
      <button onClick={destructure} className="p-5">change</button>
    </div>
  )
}

export default App



