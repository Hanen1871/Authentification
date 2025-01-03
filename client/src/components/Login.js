// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../redux/userSlice/userSlice";

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { userlogin } from "../JS/userSlice/userSlice";
const Login = () => {





  const [login, setLogin] = useState({

    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  // const isAuth = localStorage.getItem("token")
  const navigate = useNavigate();
  return (

<div className="login">
<form onSubmit={(e) => e.preventDefault()} className="form-signin">

    <input type="text" placeholder="Username" id="username"  onChange={(e) => setLogin({ ...login, email: e.target.value })}/>  
  <input type="password" placeholder="password" id="password"  onChange={(e) => setLogin({ ...login, password: e.target.value })}
  />  
  <a href="#" className="forgot">forgot password?</a>
  <input type="submit" value="Sign In"/>

{/* <div className="shadow"> */}












      {/* <div  className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">


          <h2 className="form-signin-heading" style={{ paddingTop: "30px" }}>  Please login </h2>


          <input
            className="form-control"
            type="text"
            placeholder="Email Address"
            name="Username"
            required=""
            autofocus=""
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />


          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            required=""
            onChange={(e) => setLogin({ ...login, password: e.target.value })}

          />
          <div style={{ display: 'flex', padding: "2px 5px 10px 5px" }}>
            <label>
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" />remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block w-75" style={{
            background: "rgb(134,119,121)", display: "flex",
            width: "230px", height: "30px",
            border: "none", borderRadius: "10px", backgroundColor: "rgb(79, 60, 49)"
          }} onClick={() => {
            dispatch(userlogin(login));
            setTimeout(() => {
              navigate("/profil");
            }, 1000);


          }}> */}



{/* <button className="btn btn-lg btn-primary btn-block w-75" style={{
            background: "rgb(134,119,121)", display: "flex",
            width: "230px", height: "30px",
            border: "none", borderRadius: "10px", backgroundColor: "rgb(79, 60, 49)"
          }} onClick={() => {
            dispatch(userlogin(login));
            setTimeout(() => {
              navigate("/profil");
            }, 1000);


          }}>
            <p style={{ display: "flex", fontSize: "20px", alignItems: "center", paddingTop: "10px",
               alignSelf: 'center', marginLeft: "40px" }}> Login</p>
               </button> */}
          <p style={{ fontSize: "15px" }}> u already have account <Link to="/register">sign up
          </Link> {" "}
          </p></form>
      </div>      

  )
};

export default Login