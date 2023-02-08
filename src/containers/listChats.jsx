/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'

// components import
import SearchBar from '../components/searchBar'
import ChatItem from '../components/chatItem'

import style from '../styles/css/listChats.module.css'

const listChats = () => {
  const [myChats, setChats] = useState([1, 2])

  useEffect(() => {
    setChats([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])
  }, [])

  return (
    <>
      <SearchBar />
      <section className={style.listChats}>
        {myChats.map((value) => {
          return <ChatItem key={value} />
        })}
      </section>
    </>
  )
}

export default listChats
