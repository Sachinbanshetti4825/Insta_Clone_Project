import React from 'react'
import "../style/nav.scss"
import {useNavigate} from "react-router-dom"

const Nav = () => {

  let navigate=useNavigate();

  return (
    <div className='navbar' >
      <h1>Instagram</h1>
      <button className='button primary-button' onClick={()=>navigate("/createPost")} >New Post</button>
    </div>
  )
}

export default Nav;
