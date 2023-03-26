// react import
import React from 'react'

// styles import
import styles from '../styles/css/appBar.module.css'

// @mui imports
import Avatar from '@mui/material/Avatar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// assets imports
import profile from '../assets/static/avatarProfile.jpg'
import { useNavigate } from 'react-router-dom';

// redux imports 
import { useSelector } from 'react-redux';

const appBar = ({ name }) => {

  const navigate = useNavigate()
  const userId = useSelector((state) => state.userController).userId
  return (
    <header className={styles.appBar}>
      <ArrowBackIcon onClick={() => {navigate(`/${userId}`)}} />
      <Avatar src={profile} />
      <h1>{name}</h1>
    </header>
  )
}

export default appBar
