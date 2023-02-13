// react imports
import React, { useRef } from 'react'

// styles import
import style from '../styles/css/searchBar.module.css'

const searchBar = ({ chatSearch, setChatSearch }) => {
  const searchInput = useRef(null)
  const handleSearch = () => {
    setChatSearch(searchInput.current.value)
  }

  return (
    <section className={style.searchBar}>
      <input
        type='text'
        placeholder='🔍 Busca chats aqui'
        value={chatSearch}
        ref={searchInput}
        onChange={handleSearch}
      />
    </section>
  )
}

export default searchBar
