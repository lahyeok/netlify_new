export default function Profile(){
  const imgurl = './src/assets/profile.jpg'

  const hadleCLick = (e) => {
    e.target.style.display = "none"
  }

  
  return(
    <img src={imgurl} onClick={(e)=>hadleCLick(e)} alt="" />
  )
}