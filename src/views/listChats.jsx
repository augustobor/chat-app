// react import
import React, { useEffect, useState } from 'react'

// components import
import SearchBar from '../components/searchBar'
import ChatItem from '../components/chatItem'
import ChatForm from '../components/chatForm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// hook import
import useChats from '../hooks/useChats'

// style import
import style from '../styles/css/listChats.module.css'
import { useParams } from 'react-router-dom'

//axios import
import axios from 'axios'
 
// reduximport
import { useDispatch, useSelector } from 'react-redux'
import { updateUserState } from '../redux/userSlice.js'

import { useNavigate } from 'react-router-dom';

const listChats = () => {
  const [myChats, setMyChats] = useState([{}])
  const [globaChats, setGlobalChats] = useState([{}])
  const [chatSearch, setChatSearch] = useState('')
  const [modal, setModal] = useState(false)
  
  const navigate = useNavigate()
  const { userID } = useParams()
  
  const dispatch = useDispatch()
  dispatch(updateUserState(userID))

  const getChats = async() => {
    try {

      const responseChats = await axios.get(`/chat/findUsers/${userID}`)

      setMyChats(responseChats.data.body)
      setGlobalChats(responseChats.data.body)
    } catch (e) {
      console.error(e)
    }
  }

  const handleClose = () => {
    
    navigate('/')
  }
  
  useEffect(() => {
    getChats()
  },[modal])
  
  useEffect(() => {
   setMyChats(useChats(chatSearch,globaChats))
  },[chatSearch])

  
  return (
    <>
      <header className={style.appBar}>
        <ArrowBackIcon onClick={() => {handleClose()}} />
        <SearchBar chatSearch={chatSearch} setChatSearch={setChatSearch} />
      </header>
      <section className={style.listChats}>
        {myChats && myChats.map((chat, i) => (
          <ChatItem key={i} idChat={chat._id} name={chat.name} lastMessage={chat.lastMessage} />
        ))}
      </section>
      <button className={style.chatButton} onClick={() => setModal(!modal)}>+</button>
      { modal && <ChatForm userID={userID} setModal={setModal}/>}
    </>
  )
}

export default listChats
