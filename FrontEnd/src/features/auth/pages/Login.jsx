import React, { useState } from 'react'
import axios from "axios"
import "../style/form.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'



const Login = () => {

  let [userData,setUserData]=useState({
    LoginId:"",
    PassWord:""
  })

  let {user,loading,msg,handleLogin} = useAuth();

  let navigate = useNavigate();



  async function handleSubmit(e){

    e.preventDefault();

    await handleLogin(userData.LoginId,userData.PassWord);

    navigate("/feed")

  }

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  return (

    <main className='auth_page' >

      <h1>Login Form</h1>

    <div className='form_container' >
      <form  onSubmit={(e)=>handleSubmit(e)} >
        <div className='input_field_container' >
          <label htmlFor="Email" className="input_text">Enter Email : </label>
          <input 
              
              type="text" 
              id="LoginId"
              placeholder='Enter Email'
              onChange={(e)=>(
                setUserData({
                    ...userData,
                    LoginId:e.target.value
                })
              )}
              value={userData.LoginId}
              required

          />
        </div>

        <div>
          <label className="input_text" htmlFor="PassWord">Enter PassWord : </label>
          <input 
              
              type="password" 
              id="PassWord"
              placeholder='Enter Password'
              onChange={(e)=>(
                setUserData({
                    ...userData,
                    PassWord:e.target.value
                })
              )}
              value={userData.PassWord}
              required

          />
        </div>
        {msg && <p>{msg}</p>}
        <button className='button primary_button' type='Submit'>{loading ? "Login...":"Login"}</button>
        <p>Dont you have an account ? <Link className='toggleAuthForm' to="/register" >Register</Link></p>

    </form>
    </div>
  </main>
  )
}

export default Login

