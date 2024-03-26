import './Card.css'


export default function Card(){
  return(
    <div className='card'>
      {/* <img className="card-img" src="https://via.placeholder.com/150" alt="profile image" /> */}
      <img className='card-img' src="{profilePic}" alt="" />
      <h2 className='card-title'>Test</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eaque at sint explicabo praesentium velit repellendus aperiam quaerat magnam delectus. Optio, ipsum hic expedita a tempora fugit perspiciatis cum sint?</p>
    </div>
  )
}