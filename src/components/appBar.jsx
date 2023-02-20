// react import
import React from 'react'

// styles import
import styles from '../styles/css/appBar.module.css'

// @mui imports
import Avatar from '@mui/material/Avatar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// assets imports
import profile from '../assets/static/avatarProfile.jpg'

const appBar = () => {
  return (
    <header className={styles.appBar}>
      <ArrowBackIcon />
      <Avatar src={profile} />
      <h1>Nombre</h1>
    </header>
  )
}

export default appBar
