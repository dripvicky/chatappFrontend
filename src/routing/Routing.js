import React from 'react'
import Signup from '../component/signup/Signup'
import Login from '../component/login/Login'
import Chatroom from '../component/chatroom/Chatroom'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/chatroom' element={<Chatroom/>} />
    </Routes>
  )
}

export default Routing
