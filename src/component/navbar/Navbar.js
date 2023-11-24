import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    navigate('/login')
  }
  return (
    <div className='navbar bg-dark text-white'>
      <div className='nav-content'>
      <div className='nav-brand'>chatapp</div>
      <div>username</div>
      <div onClick={handleLogout}>logout</div> 
      </div>
    </div>
  )
}

export default Navbar
