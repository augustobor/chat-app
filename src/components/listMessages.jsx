// react imports
import React, { useEffect, useState } from 'react'

// mui imports
import Message from './message'

// axios import
import axios from 'axios'

const listMessages = ({ chatId }) => {
    
    const [ messages, setMessages ] = useState([{}]) 

    const getMessages = async() => {
        try {
            const responseMessage = await axios.get(`/message/chatMessages/${chatId}`)
            setMessages(responseMessage.data.body)
          } catch (e) {
            console.error(e)
          }
    }

    useEffect(() => {
        getMessages()
    },[])
    return (null)
}

export default listMessages