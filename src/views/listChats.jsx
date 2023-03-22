// react import
import React, { useEffect, useState } from 'react'

// components import
import SearchBar from '../components/searchBar'
import ChatItem from '../components/chatItem'
import ChatForm from '../components/chatForm'

// hook import
import useChats from '../hooks/useChats'

// style import
import style from '../styles/css/listChats.module.css'
import { useParams } from 'react-router-dom'

//axios import
import axios from 'axios'

const listChats = () => {
  const [myChats, setMyChats] = useState([{}])
  const [chatSearch, setChatSearch] = useState('')
  const [modal, setModal] = useState(false)
  
  const { userID } = useParams()
  const getChats = async() => {
    try {

      const responseChats = await axios.get(`/chat/${userID}`)

      setMyChats(responseChats.data.body)

    } catch (e) {
      console.error(e)
    }
  }
  
  useEffect(() => {
    getChats()
  },[modal])
  
  useEffect(() => {
    useChats(chatSearch,myChats)
  },[chatSearch])

  
  return (
    <>
      <SearchBar chatSearch={chatSearch} setChatSearch={setChatSearch} />
      <section className={style.listChats}>
        {myChats && myChats.map((chat, i) => (
          <ChatItem key={i} id={chat.id} name={chat.name} lastMessage={chat.lastMessage} />
        ))}
      </section>
      <button className={style.chatButton} onClick={() => setModal(!modal)}>+</button>
      { modal && <ChatForm userID={userID} setModal={setModal}/>}
    </>
  )
}

export default listChats
