import React, { useEffect, useRef, useState } from 'react'

import styles from '../styles/css/chatForm.module.css'

import axios from 'axios'
import { CircularProgress } from '@mui/material'

const chatForm = ({ userID, setModal }) => {

    const formRef = useRef(null)

    const [contacts, setContacts] = useState([{}])
    const [submited, setSubmited] = useState(false)

    const handleSubmit = async (event) => {

        const { name, contacts } = formRef.current

        setSubmited(true)
        event.preventDefault()
        try {
            const responseUsers = await (await axios.get(`/user/name/getByJustName?name=${contacts.value}`)).data.body._id
            await axios.post(`/chat/${userID}`, { name: name.value, addUsersId: responseUsers})
            setSubmited(false)
            setModal(false)
        } catch (e) {
            console.error(e)
        }
    }

    const getContacts = async () => {
        try {
            const response = await axios.get('/user')
            setContacts(response.data.body)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getContacts()
    },[])

    return (
        <div className={styles.modal}>
            <section className={styles.chatForm}>
                <h1>Please insert contact/group data</h1>
                <form className={styles.checkForm} id="chatForm" onSubmit={handleSubmit} ref={formRef}>
                    <label>chat name</label>
                    <input type="text" name="name" placeholder='chatName'/>
                    <label>Contact/s</label>
                    <select form="chatForm" className={styles.options} name="contacts">
                        {contacts && contacts.map((contact, i) => (
                            <option key={i} value={contact.name}>{contact.name}</option>
                            ))}
                    </select>
                    { submited 
                        ? <div className={styles.progress}><CircularProgress /></div> 
                        : <button className={styles.checkButton} onClick={() => handleSubmit}>Crear chat</button>
                    }
                </form>
            </section>
        </div>
    )
} 

export default chatForm