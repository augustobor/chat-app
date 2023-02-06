// react imports
import React, { useState, useRef } from 'react'

// styles import
import style from '../styles/css/searchBar.module.css'

const searchBar = () => {
  const [chatSearch, setChatSearch] = useState('')

  const searchInput = useRef(null)
  const handleSearch = () => {
    setChatSearch(searchInput.current.value)
  }

  return (
    <section className={style.searchBar}>
      <input
        type='text'
        placeholder='Busca chats aqui'
        value={chatSearch}
        ref={searchInput}
        onChange={handleSearch}
      />
    </section>
  )
}

export default searchBar
