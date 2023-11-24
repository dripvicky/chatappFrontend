import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './login.css'

const Login = () => {
  const [email,setemail] = useState('')
  const [pass,setpass] = useState('')

  const navigate = useNavigate()
  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://chatbackend-rwbf.onrender.com/api/user/login',{
        email,pass
      })
      if(res.data.email === email ){
        alert('login success')
        localStorage.setItem('userInfo',JSON.stringify(res.data))
        navigate('/chatroom')
      }else{
        alert(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <div className='login'>
      <div className='main'>
        <h1>login to explore</h1>
        <input placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}/>
        <input placeholder='enter your password' onChange={(e)=>setpass(e.target.value)}/>
        <button className='btn btn-success' onClick={handleLogin}>login</button>
      </div>
    </div>
  )
}

export default Login
