// react imports
import React from 'react'
import { useNavigate } from 'react-router-dom'

// assets imports
import profile from '../assets/static/avatarProfile.jpg'

// @mui imports
import Avatar from '@mui/material/Avatar'

// style import
import style from '../styles/css/chatItem.module.css'

// redux imports
import { useDispatch } from 'react-redux'
import { updateChatState } from '../redux/chatSlice'



const chatItem = ({ idChat, name, lastMessage }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChat = () => {
    (screen.width <= 650) ? navigate(`/chat/${idChat}`) : dispatch(updateChatState(idChat))
  }

  return (
    <article className={style.chatItem} onClick={() => handleChat()}>
      <Avatar alt='Contact' sx={{
        'transform': 'scale(1.5)'
      }} src={profile} />
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
