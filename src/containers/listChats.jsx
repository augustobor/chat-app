// react import
import React, { useState } from 'react'

// components import
import SearchBar from '../components/searchBar'
import ChatItem from '../components/chatItem'

// hook import
import useChats from '../hooks/useChats'

// style import
import style from '../styles/css/listChats.module.css'

const listChats = () => {
  const [chatSearch, setChatSearch] = useState('')

  const chats = useChats(chatSearch)

  return (
    <>
      <SearchBar chatSearch={chatSearch} setChatSearch={setChatSearch} />
      <section className={style.listChats}>
        {chats.map(chat => (
          <ChatItem key={chat.id} id={chat.id} name={chat.name} lastMessage={chat.lastMessage} />
        ))}
      </section>
    </>
  )
}

export default listChats
