import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './features/auth/pages/Login'
import Register from "./features/auth/pages/Register" 
import Feed from "./features/post/pages/Feed"
import CreatePost from './features/post/pages/CreatePost'
import Post from './features/post/Components/Post'
import Nav from './features/post/Components/Nav'
import Comment from './features/post/pages/Comment'
import { Navigate } from 'react-router-dom'

const AppRoutes = () => {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/Login" element={<Login/>} ></Route>
            <Route path="/Register" element={<Register/>} ></Route>
            <Route path="/feed" element={<Feed/>}></Route>
            <Route path="/createPost" element={<CreatePost/>} ></Route>
            <Route path="/post" element={<Post/>} ></Route>
            <Route path="/nav" element={<Nav/>} ></Route>
            <Route path='/comment/:id' element={<Comment/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
