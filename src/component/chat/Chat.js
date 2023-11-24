import React, { useContext, useEffect, useState } from 'react'
import './chat.css'
import Context from '../context/Context'
import axios from 'axios'

const Chat = ({c}) => {
  const {User} = useContext(Context)
  const [friend,setFriend] = useState(null)

  const friendId = c.users.find(u=>u !== User._id)

  useEffect(()=>{
    const getFriend = async()=>{
      const res = await axios.get('https://chatbackend-rwbf.onrender.com/api/user/find/'+friendId)
      setFriend(res.data)
    }
    getFriend()
  },[c])
  return (
    <div className='chat'>
      <div className='chatuser'>
        <img src='./pics/dp.jpg' alt='' />
        <span>{friend?.name}</span>
      </div>
    </div>
  )
}

export default Chat
