import { useState } from "react"
export default function MyComponent_08(){

  const [name,setName] = useState("Guest")
  const [age,setAge] = useState(0)
  const [isEmployed,setIsImployed] = useState(false);

  const updateName = () => {
    setName("홍길동 ");
  }

  const incrementAge = () =>{
    setAge(age+1);
  }

  const updateIsEmployed = () =>{
    setIsImployed(!isEmployed);
  }

  return(
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed?"yes":"no"}</p>
      <button onClick={updateIsEmployed}>Toggle Status</button>
    </div>
  )
}