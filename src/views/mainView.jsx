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

// redux
import { useSelector } from 'react-redux'

const mainView = () => {


    const { id } = (screen.width <= 650) ? useParams() : useSelector((state) => state.chatController).chatId
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
        <section className={styles.mainView}>
            <div className={styles.mainView_mobile}>
                <AppBar name={chat.name}/>
            </div>
            <ListMessages chatId={id}/>
            <TextBar />
        </section>
    )
}

export default mainView