import { useState } from "react"

export default function MyComponent_12(){

  const [car,setCar] = useState({
    year:2024,
    make:"Ford",
    model:"Mustang",
  })

  //부분 수정이 아니라 전체 내용을 다시 만들어줘야한다
  function handleYearChange(e){
    setCar({...car, year:e.target.value
    })
  }

  function handleMakeChange(e){
    setCar({...car, make:e.target.value
    })
  }

  function handleModelChange(e){
    setCar({...car, model:e.target.value
    })
  }

  return(
    <div>
      <p>Your Favorite car is : {car.year} {car.make} {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange}/>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  )
}