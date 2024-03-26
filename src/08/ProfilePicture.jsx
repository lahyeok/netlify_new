import { useState } from "react"

export default function ProfilePicture(){
  const imgurl = './src/assets/profile.jpg'

  let displayValue = ""
  const handleClick = () => {
    displayValue ? displayValue = "" : displayValue = "none"
    console.log(displayValue)
    document.getElementById("dis").style.display = displayValue
  }

  const [display,setDisplay] = useState("")
  const styles = {display:display}
  const handleClick2 = () => {
    setDisplay(display ?  "" :  "none")
    
  }
  
  return(
    <>
    <img src={imgurl} id="dis" alt="" />
    <button onClick={handleClick}>이미지 1</button>
    <img src={imgurl} style={styles} />
    <button onClick={handleClick2}>이미지 2</button>
    </>
  )
}