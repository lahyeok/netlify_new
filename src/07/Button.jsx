export default function Button(){
  const hadleClick = () => console.log("ouch!")
  const hadleClick2 = (name) => console.log(`${name} stop clicking me`)

  let count = 0
  const hadleClick3 = (name) => {
    if(count<3){
      count++
      console.log(`${name} you clicked me ${count} items`)
    }else{
      console.log(`${name} stop clicking me! ${count}`)
    }
  }

  const hadleClick4 = (e) =>{
    console.log(e)
    e.target.textContent = "😁😁"
  }

  return(
    <>
    <button onClick={hadleClick}>CLick me 😊</button>
    <button onClick={()=> hadleClick2(`홍길동`)}>click me 😂</button>
    <button onClick={()=> hadleClick3(`홍길동`)}>Click me {count}  </button>
    <button onClick={(e)=> hadleClick4(e)}>pop me</button>
    </>
  )
}