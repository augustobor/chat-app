// react import
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components import
import AppBar from '../components/appBar'
import ListMessages from '../components/listMessages'
import TextBar from '../components/textBar'

// styles import
import styles from '../styles/css/mainView.module.css'

// axios
import axios from 'axios'

const mainView = () => {

    const { id } = useParams()
    const [chat, setChat] = useState({})

    const getChat = async() => {
        try {

            const responseChat = await axios.get(`/chat/findChat/${id}`)
            setChat(responseChat.data.body)
          } catch (e) {
            console.error(e)
          }
    }
    
    useEffect(() => {
        getChat()
    }, [])

    return (
        <>
            <AppBar name={chat.name}/>
            <ListMessages chatId={id}/>
            <TextBar />
        </>
    )
}

export default mainView