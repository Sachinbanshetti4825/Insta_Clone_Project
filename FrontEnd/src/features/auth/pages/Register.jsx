import React, { useState } from 'react'
import axios from "axios"
import "../style/form.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate=useNavigate();

    let [userData,setUserData] =useState({
        UserName:"",
        Email:"",
        PassWord:"",
        Bio:""
    });

    let { user,loading,msg,handleRegister} = useAuth();


    async function handleSubmit(e){

      e.preventDefault();

      console.log(userData);
      await handleRegister(userData.UserName,userData.Email,userData.PassWord,userData.Bio);


      setUserData({
        UserName:"",
        Email:"",
        PassWord:"",
        Bio:""
      })

      navigate("/login");

    }

    


  return (
    <main className='auth_page' >
      
      <h1>Register Form</h1>

      <div className="form_container">


        <form action="" onSubmit={(e)=>handleSubmit(e)} >
        <div>
            <label htmlFor="UserName">Enter UserName : </label>
            <input 

              type="text" 
              id="UserName"
              onChange={(e)=>setUserData({
                ...userData,
                UserName:e.target.value
              })}

              placeholder="Enter UserName"
              value={userData.UserName}
              required

            />
        </div>
        <div>
            <label htmlFor="Email">Enter Email : </label>
            <input 

                type="email" 
                id="Email"
                onChange={(e)=>(
                  setUserData({
                    ...userData,
                    Email:e.target.value
                  })
                )}
                placeholder="Enter Email"
                value={userData.Email}
                required


            />
        </div>
        <div>
            <label htmlFor="PassWord">Enter PassWord : </label>
            <input

                type="password" 
                id="PassWord"
                onChange={(e)=>(
                  setUserData({
                    ...userData,
                    PassWord:e.target.value
                  })
                )}

                placeholder="Enter PassWord"
                value={userData.PassWord}
                required

            />
        </div>
        <div>
            <label htmlFor="Bio">Enter Bio : </label>
            <input 

                type="text" 
                id="Bio"
                placeholder='Enter Bio'
                onChange={(e)=>(
                  setUserData({
                    ...userData,
                    Bio:e.target.value
                  })
                )}
                value={userData.Bio}
                required

             />
        </div>
        {msg && <p>{msg}</p>}
        <button type='Submit'>{loading ? "Registering...":"Register"}</button>
        <p>Already have an account ? <Link className="toggleAuthForm" to="/login" >Login</Link></p>
      </form>
      </div>
    </main>
  )
}

export default Register
