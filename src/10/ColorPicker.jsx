import { useState } from "react"
import './ColorPicker.css'

export default function ColorPicker(){

  const [color,setColor] = useState("#ffffff")

  function handleColorChange(e){
    setColor(e.target.value)
  }

  return(
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor:color}}>
        <p>Selected Color:{color}</p>
      </div>
        <label htmlFor="color">Selected a color</label>
        <input type="color" id=""  value={color} onChange={handleColorChange}/>
      
    </div>
  )
}

// 리턴되는 내용이 렌더링 되서 컴포넌트에 나타남