

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://plus.unsplash.com/premium_photo-1789052769023-a5226eadcaf6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        <h1>{props.user}</h1>
        <h4>{props.age}</h4>
        <button>View profile</button>
    </div>
  )
}

export default Card;