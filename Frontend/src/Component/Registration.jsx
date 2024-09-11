import React, { useEffect, useState } from "react";
import "./ragistration.css";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

const Registration = () => {
 //data storing state
 const navigate = useNavigate();
 const [fullname, setFullname] = useState();
 const [emailId, setEmailId] = useState();
 const [number, setNumber] = useState();
 const [password, setPassword] = useState();
 const [confirmPassword, setConfirmPassword] = useState();
 const [loginData, setLoginData] = useState([]);
 
 //erroe massage storing state
 const [errorFullname, setErrorFullname] = useState(false);
 const [errorEmailId, setErrorEmailId] = useState(false);
 const [errorNumber, setErrorNumber] = useState(false);
 const [errorConfirmPassword, setErrorConfirmPassword]=useState(false);
 const [errorPassword, setErrorPassword]=useState(false);
 const [showHide, setShowHide] =useState(false);

 //-------onChange function ------
 const nameRegEx = /[a-zA-Z]+[a-zA-Z]$/;
 let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
 const handleFullname=(e)=>{
   let name = document.getElementById("fullname").value;
   if (!(name.match(nameRegEx)) || (name.length === 0 )) {
     setErrorFullname(true);
   }else{
     setErrorFullname(false);
   }
   setFullname(name);
 }
 const handleNumber=(e)=>{
   let number1 = document.getElementById("number").value.trim();
   if ((isNaN(number1)) || (number1.length < 10) || number1.length === 0) {
     setErrorNumber(true);
   }else{
     setErrorNumber(false);
   }
   setNumber(number1);
 }
 const handleEmail=(e)=>{
   const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let gmail = document.getElementById("gmail").value.trim();
   if (!(gmail.match(emailRegex))) {
     setErrorEmailId(true);
   }else{
     setErrorEmailId(false);
   }
   setEmailId(gmail);
 }

 const handlePassword=(e)=>{
   let password1 = document.getElementById("password").value;
   if (password1.length === 0 || !(password1.match(pass))) {
     setErrorPassword(true);
   }else{
     setErrorPassword(false);
   }
   setPassword(password1);
   
 }

 const handleConfirmPassword = (e)=>{
   let confirmPassword1 = document.getElementById("confirmPassword").value;
   if (confirmPassword1.length === 0 || !(confirmPassword1 === password)) {
     setErrorConfirmPassword(true);
   }else{
     setErrorConfirmPassword(false);
   }
   setConfirmPassword(confirmPassword1);
 }

 //password hide and show function
 const showHiding = (e)=>{
   setShowHide(!showHide)
 }

 //form submit function
 const submitData = (e) => {
   const user = {
       fullname: fullname,
       email: emailId,
       password:password
     }
     console.log("User",user);
     fetch('http://localhost:4000/signUp',{
      method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(user),
      }).then((response) => response.json())
      .then((res) => {
        console.log("Result", res);
        if(res.status === true){
          navigate('/');
        }
      }).catch((error)=>{
        console.log(error);
      })
 }

 //localstorage data fetch
 useEffect(() => {
   localStorage.setItem('loginData', JSON.stringify(loginData));
 }, [loginData]);

 return (
     <div className="registerMain">
     <span className="userIcon"><BsFillPersonFill/></span>
     <h1>User Information</h1>
       <div>
         <label>Fullname</label><br/>
         <input type="text" onChange={handleFullname} value={fullname} placeholder="Enter Fullname..." id="fullname" maxLength="40" name="fullname"></input><br/>
       </div>
       {/* <div>
         <label>Mobile No</label><br/>
         <input type="text" onChange={handleNumber} value={number} placeholder="Enter Mobile No..." id="number"  maxLength="10"  name="number"></input><br/>
       </div> */}
       <div>
         <label>Email Id</label><br/>
         <input type="text" onChange={handleEmail} value={emailId} placeholder="Enter EmailId..." id="gmail" maxLength="30"  name="gmail"></input><br/>
       </div>
       <div className="filed">
         <label>Password</label><br/>
         <input type={`${showHide ? "text" : "password"}`} onChange={handlePassword} value={password} placeholder="Enter Password..." id="password" name="password"></input>
         <span className="icon" onClick={showHiding}>{showHide ? <FiEye/> : <FiEyeOff/>}</span>
         <br/>
       </div>
       <div>
         <label>Confirm Pawword</label><br/>
         <input type="password" onChange={handleConfirmPassword} value={confirmPassword} placeholder="Enter Confirm Password..." id="confirmPassword" name="confirmPassword"></input><br/>
       </div>
       <button onClick={submitData}>Submit</button>
       <NavLink exact to='/'><button >Back</button></NavLink>
     </div>
 )
};

export default Registration;