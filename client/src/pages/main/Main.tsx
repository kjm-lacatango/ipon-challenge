import "./Main.scss"
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate("/register");
  }

  const onSignIn = () => {
    navigate("/login");
  }

  return (
    <div className='main'>
      <div className='nav'>
        <span className='logo'>KJM Tech</span>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Guide</li>
        </ul>
        <button className='signup' onClick={onSignUp}>signup</button>
      </div>
      <div className='body'>
        <span>Challenge your self now by clicking continue.</span>
        <button onClick={onSignIn}>Continue</button>
      </div>
    </div>
  )
}

export default Main
