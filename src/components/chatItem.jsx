// react imports
import React from 'react'
import { useNavigate } from 'react-router-dom'

// assets imports
import profile from '../assets/static/avatarProfile.jpg'

// @mui imports
import Avatar from '@mui/material/Avatar'

// style import
import style from '../styles/css/chatItem.module.css'

const chatItem = ({ idChat, name, lastMessage }) => {

  const navigate = useNavigate()

  const handleChat = () => {
    navigate(`/chat/${idChat}`)
  }

  return (
    <article className={style.chatItem} onClick={() => handleChat()}>
      <Avatar alt='Contact' src={profile} />
      <section>
        <h4>{name}</h4>
        <p>
          {lastMessage}
        </p>
      </section>
    </article>
  )
}

export default chatItem
