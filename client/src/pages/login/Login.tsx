import { useState } from "react"
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "../../shared/svg-icons/Icon"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [message, setMessage] = useState({status: "", text: ""})
  const [isShowPass, setIsShowPass] = useState<boolean>(false)

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email === "Admin@gmail.com" && password === "Admin") {
      setMessage({status: "success", text: "Login Successful"});
      setTimeout(() => {
        navigate("/dashboard");
        setMessage({status: "", text: ""});
      }, 1000);
      return;
    }

    setMessage({status: "error", text: "Invalid Username or Password"});
    setTimeout(() => setMessage({status: "", text: ""}), 2000);
  }

  return (
    <div className="login">
      <form className="card" onSubmit={onSignIn}>
        <div className="user-lock"><Icon type="user-lock" width={70} height={70} /></div>
        <span className="sign-in">Sign In</span>
        {message && <span className={message.status}>{message.text}</span>}
        <div className="inputs">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label htmlFor="password">Password:</label>
          <input type={isShowPass ? 'true' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <span className="icon" onClick={() => setIsShowPass(prev => !prev)}><Icon type={isShowPass ? 'eye-open' : 'eye-close'} /></span>
        </div>
        <span className="forgot-pass">Forgot Password?<u>Click Here</u></span>
        <button type="submit">Sign In</button>
        <span className="text">Don't have an account? <Link to="/register" className="sign-up">Sign Up</Link></span>
      </form>
    </div>
  )
}

export default Login
