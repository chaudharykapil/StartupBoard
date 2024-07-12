import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './screens/Homepage'
import SignupScreen from './screens/user/SignupScreen'
import LoginScreen from './screens/user/LoginScreen'
import CreateBlog from './screens/blog/createBlog'
import BlogPage from './screens/blog/BlogPage'

function App() {
  const curruser = localStorage.getItem("curr_user")
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' Component={Homepage} />
        <Route path='/user/register' Component={SignupScreen} />
        <Route path='/user/login' Component={LoginScreen} />
        <Route path='/user/write' Component={CreateBlog} />
        <Route path='/blog/:id' Component={BlogPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
