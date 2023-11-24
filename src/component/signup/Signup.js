import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './signup.css'

const Signup = () => {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [pass,setpass] = useState('')

  const navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://chatbackend-rwbf.onrender.com/api/user/register',{
        name,email,pass
      })
      if(res.data.name === name){
        alert('register success')
        navigate('/login')
      }else{
        alert(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='signup bg-black'>
      <div className='main'>
        <div className='mainbox'>
        <h1>register yourself</h1>
        <input placeholder='enter your name'onChange={(e)=>setname(e.target.value)} />
        <input placeholder='enter your email'onChange={(e)=>setemail(e.target.value)} />
        <input placeholder='enter your password' onChange={(e)=>setpass(e.target.value)}/>
        <button className='btn btn-success' onClick={handleRegister}>register</button>
        </div>
        <div className='link'>already have an account ? <span><Link className='nav-link' to='/login' >login</Link></span> </div>
      </div>
    </div>
  )
}

export default Signup
