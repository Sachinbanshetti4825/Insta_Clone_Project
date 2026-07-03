import React from 'react'
import AppRoutes from './AppRoutes'
import "./features/Shared/global.scss"
import  {AuthProvider}  from './features/auth/auth.context'
import { PostProvider } from './features/post/Post.context'
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <AuthProvider>
        <PostProvider>
          <AppRoutes/>
        </PostProvider>
    </AuthProvider>
  )
}

export default App
