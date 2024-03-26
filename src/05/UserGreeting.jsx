import './UserGreeting'
import PropsTypes from 'prop-types'

export default function UserGreeting(props){
  console.log(props)
//   if(props.isLoggedIn){
//     return <h2> Welcome {props.username}</h2>
//   }else{
//     return <h2> Please log in to continue</h2>
//   }

const WelcomeMessage = <h2 className='welcome-message'>Welcome {props.username}</h2>
const loginPrompt = <h2 className='login-prompt'>Please log in to continue</h2>
  return(
    <>
    {props.isLoggedIn && WelcomeMessage} 
    {props.isLoggedIn || loginPrompt}
    </>
  )
}

UserGreeting.PropsTypes = {
  isLoggedIn: PropsTypes.bool,
  username: PropsTypes.string
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username:"Guest",

}