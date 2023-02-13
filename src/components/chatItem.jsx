import React from 'react'

// assets imports
import profile from '../assets/static/avatarProfile.jpg'

// @mui imports
import Avatar from '@mui/material/Avatar'

// style import
import style from '../styles/css/chatItem.module.css'

const chatItem = ({ name, lastMessage }) => {
  return (
    <article className={style.chatItem}>
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
