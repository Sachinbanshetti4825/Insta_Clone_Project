import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './features/auth/pages/Login'
import Register from "./features/auth/pages/Register"
import Home from './features/post/Home' 
import Feed from "./features/post/pages/Feed"
import CreatePost from './features/post/pages/createPost'
import Post from './features/post/Components/Post'
import Nav from './features/post/Components/Nav'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>} ></Route>
            <Route path="/Register" element={<Register/>} ></Route>
            <Route path="/" element={<Feed/>}></Route>
            <Route path="/createPost" element={<CreatePost/>} ></Route>
            <Route path="/post" element={<Post/>} ></Route>
            <Route path="/nav" element={<Nav/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
