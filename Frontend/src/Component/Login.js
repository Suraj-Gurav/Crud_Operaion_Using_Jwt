import React, {useState } from 'react';
import './Login.css';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FcGoogle, } from "react-icons/fc";
import { BsFillPersonFill, BsFacebook, BsLinkedin, BsBoxArrowRight } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showHide, setShowHide] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  //password hide and show function
  const showHiding = (e) => {
    setShowHide(!showHide)
  }

  const login = (e) => {
    const formData = {
      email: user,
      password: password
    };
    console.log(formData.fullname);
    fetch('http://localhost:4000/signIn',{
      method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // "Authorization": "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json())
      .then((res) => { 
        console.log("Result", res);
        if(res.status){
          navigate('/Home');
        }
      }).catch((error)=>{
        console.log(error);
      })
  
  }

  return (
    <div className="divMain">
      <div className="loginFiled">
        <span className='loginicon'><BsBoxArrowRight /></span>
        <h1 className="heading">Login</h1>
      </div>
      <div className="loginFiled">
        <label className='label1' htmlFor='user'>User</label>
        <input type='text' value={user} id='user' onChange={(e) => { setUser(e.target.value); setUserError(false); }} placeholder="FullName.." />
        <span className='icon1'><BsFillPersonFill /></span>
        {userError ? <small>**Please Enter Valid Fullname**</small> : ""}
      </div>
      <div className="loginFiled">
        <label className='label1' htmlFor='password'>Password</label>
        <input type={`${showHide ? 'text' : 'password'}`} id='password' onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }} value={password} placeholder="Password.." />
        <span className="icon1" onClick={()=>showHiding()}>{showHide ? <FiEye /> : <FiEyeOff />}</span>
        {passwordError ? <small>**Please Enter Your Valid Password**</small> : ""}
      </div>
      <div className="loginFiled">
        <button className='btn' onClick={login}>Sign Up</button>
        <NavLink className='btn' excat to='/registration'>Registration</NavLink>
      </div>
      <hr />
      <div className="loginFiled">
        <ul>
          <li><BsFacebook /></li>
          <li><FcGoogle /></li>
          <li><BsLinkedin /></li>
        </ul>
      </div>
    </div>
  )
}

export default Login;