import React, { ChangeEvent, useState } from 'react'
import "./Register.scss"
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../shared/svg-icons/Icon';

interface UserInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
}

const Register = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState({status: "", text: ""})
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [userInfo, setUserInfo] = useState<UserInfo>({firstName: "", middleName: "", lastName: "", age: 0, gender: ""})
  const [isShowPass, setIsShowPass] = useState<boolean>(false)
  const [isShowConfirmPass, setIsShowConfirmPass] = useState<boolean>(false)

  const setInfo = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setUserInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
  }

  const onSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === confirmPassword ) {
      setMessage({status: "success", text: "Login Successful"});
      setTimeout(() => {
        navigate("/dashboard");
        setMessage({status: "", text: ""});
      }, 1000);
      return;
    }

    setMessage({status: "error", text: "Invalid. Password not match"});
    setTimeout(() => setMessage({status: "", text: ""}), 2000);
  }

  return (
    <div className="register">
      <form className='card' onSubmit={onSignUp}>
        <span className="title">Sign Up</span>
        {message && <span className={message.status}>{message.text}</span>}
        <div className='mid'>
          <div className='left-side'>
            <div className="user-lock"><Icon type="user-lock" width={70} height={70} /></div>
            <label htmlFor='email'>Email:</label>
            <input id="email" type='email' value={email} onChange={e => setEmail(e.target.value)} required />
            <label htmlFor='password'>Password:</label>
            <div className="pass">
              <input id="password" type={isShowPass ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required />
              <span className="icon" onClick={() => setIsShowPass(prev => !prev)}><Icon type={isShowPass ? 'eye-open' : 'eye-close'} /></span>
            </div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <div className="pass">
              <input id="confirmPassword" type={isShowConfirmPass ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
              <span className="icon" onClick={() => setIsShowConfirmPass(prev => !prev)}><Icon type={isShowConfirmPass ? 'eye-open' : 'eye-close'} /></span>
            </div>
          </div>
          <div className="right-side">
            <label htmlFor='firstName'>FirstName:</label>
            <input id="firstName" value={userInfo.firstName} onChange={setInfo} autoComplete='off' required />
            <label htmlFor='middleName'>MiddleName:</label>
            <input id="middleName" value={userInfo.middleName} onChange={setInfo} autoComplete='off' required />
            <label htmlFor='lastName'>LastName:</label>
            <input id="lastName" value={userInfo.lastName} onChange={setInfo} autoComplete='off' required />
            <div className='info'>
              <div>
                <label htmlFor='age'>Age:</label>
                <input id="age" type='number' value={userInfo.age} onChange={setInfo} required />
              </div>
              <div>
                <label htmlFor='gender'>Gender:</label>
                <select id="gender" value={userInfo.gender} onChange={setInfo} required>
                  <option value='' className='text-gray-400'>** SELECT **</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Sign Up</button>
        <span className='text'>Already have an account?<span className="to-login" onClick={() => navigate("/login")}>Sign In</span></span>
      </form>
    </div>
  )
}

export default Register
