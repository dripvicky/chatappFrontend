import React from 'react'
import Signup from '../component/signup/Signup'
import Login from '../component/login/Login'
import Chatroom from '../component/chatroom/Chatroom'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
      <Route path='https://chatfrontend-5skj.onrender.com' element={<Signup/>} />
      <Route path='https://chatfrontend-5skj.onrender.com/login' element={<Login/>} />
      <Route path='https://chatfrontend-5skj.onrender.com/chatroom' element={<Chatroom/>} />
    </Routes>
  )
}

export default Routing
