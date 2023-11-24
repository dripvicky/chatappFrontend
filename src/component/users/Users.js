import React from 'react'
import './user.css'

const Users = ({all}) => {
  return (
    <div className='users'>
      <div className='userbio'>
        <img src='./pics/dp.jpg' alt='' />
        <span>{all.name}</span>
      </div>
    </div>
  )
}

export default Users
