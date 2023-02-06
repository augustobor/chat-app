import React, { useEffect } from 'react'
import SearchBar from '../components/searchBar'

import style from '../styles/css/listChats.module.css'
const listChats = () => {
  useEffect(() => {
    console.log('si')
  }, [])

  return (
    <>
      <SearchBar />
      <section className={style.listChats}>
        <p>SI</p>
      </section>
    </>
  )
}

export default listChats
