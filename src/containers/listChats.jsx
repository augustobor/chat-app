/* eslint-disable array-callback-return */
import React, { useState } from 'react'

// components import
import SearchBar from '../components/searchBar'
import ChatItem from '../components/chatItem'

import style from '../styles/css/listChats.module.css'

// hook import
import useChats from '../hooks/useChats'
import { useLocalStorage } from '../hooks/useLocalStorage'

const listChats = () => {
  const myChats = useLocalStorage('CHATS', [{
    id: '1',
    name: 'Carlos',
    lastMessage: 'Mi último mensaje'
  },
  {
    id: '2',
    name: 'Carlos',
    lastMessage: 'Mi último mensaje'
  }])

  const [chatSearch, setChatSearch] = useState('')

  return (
    <>
      <SearchBar chatSearch={chatSearch} setChatSearch={setChatSearch} />
      <section className={style.listChats}>
        {useChats.searchedChats((chat) => {
          return <ChatItem key={chat.id} name={chat.name} lastMessage={chat.lastMessage} />
        })}
        {myChats.map((chat) => {
          return <ChatItem key={chat.id} name={chat.name} lastMessage={chat.lastMessage} />
        })}
      </section>
    </>
  )
}

export default listChats
