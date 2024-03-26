import { useState } from "react";

export default function MyComponent_09(){
  const [name,setName] = useState("Guest")

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  return(
    <>
    <input type="text" value={name} onChange={handleNameChange} />
    <p>Name : {name} </p>
    </>
  )
}