import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './chatroom.css'
import Navbar from '../navbar/Navbar'
import Chat from '../chat/Chat'
import Message from '../message/Message'
import Users from '../users/Users'
import Context from '../context/Context'

const Chatroom = () => {
  const [allUser, setAllUser] = useState([])
  const [chat, setChat] = useState([])
  const [messages, setMessages] = useState(null)
  const [selectedChat, setSelectedChat] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [newMessage,setNewMessage] = useState('')
  const scrollRef = useRef()

  const { User } = useContext(Context)

  useEffect(() => {
    const getAllUser = async () => {
      const res = await axios.get('https://chatbackend-rwbf.onrender.com/api/user/all')
      setAllUser(res.data)
    }
    getAllUser()
  }, [User])

  useEffect(() => {
    const getAllChat = async () => {
      const res = await axios.get('https://chatbackend-rwbf.onrender.com/api/chat/getchat/' + User?._id)
      setChat(res.data)
    }
    getAllChat()
  }, [User,chat])

  useEffect(() => {
    const getMsg = async () => {
      const res = await axios.get('https://chatbackend-rwbf.onrender.com/api/message/getmsg/' + selectedChat?._id)
      setMessages(res.data)
    }
    getMsg()
  }, [selectedChat,messages])

  useEffect(()=>{
    const addChat = async()=>{
      await axios.post('https://chatbackend-rwbf.onrender.com/api/chat/addchat',{
        senderId:User?._id,
        recieverId:selectedUser?._id
      })
    }
    addChat()
  },[selectedUser?._id])

  const handleSend =async(e)=>{
    e.preventDefault()
    const res = await axios.post('https://chatbackend-rwbf.onrender.com/api/message/addmsg',{
      chatId:selectedChat?._id,
      senderId:User._id,
      message:newMessage
    })
    setNewMessage('')
    setMessages([...messages,res.data])
  }

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior:'smooth'})
  },[messages])
  return (
    <React.Fragment>
      <Navbar />
      <div className='chatroom'>
        <div className='chatbox container'>
          <div className='chatboxwrap'>
            <h3 className='text-white'>your conversation</h3>
            {
              chat?.map((c, ind) => (
                <div onClick={() => setSelectedChat(c)} key={ind}>
                  <Chat key={ind} c={c} />
                </div>
              ))
            }
          </div>
        </div>
        <div className='messagebox container'>
          {
            selectedChat ?
            <>
          <div className='messageboxwrap'>
           
              <h3 className='text-white'>your messages</h3>
              {
                messages?.map((m, ind) => (
                  <div className='msgdiv' ref={scrollRef} key={ind}> 
                  <Message m={m} own={m.senderId === User._id} key={ind} />
                  </div>
                ))
              }
          </div>

          <div className='inputbox'>
            <input placeholder='write something' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} />
            <button className='btn btn-success' onClick={handleSend}>send</button>
          </div>
            </> : <div><h2 className='welcome'>select a chat to start a conversation</h2></div>
          }
        
        </div>

        <div className='usersbox container'>
          <div className='usersboxwrap'>
            <h5 className='text-white'>all users who use chatapp</h5>
            {
              allUser?.map((u, ind) => (
                <div  onClick={() => setSelectedUser(u)} key={ind}>
                <Users key={ind} all={u} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Chatroom
