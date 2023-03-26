import React, { useState, useRef } from 'react'

// mui imports
import Switch from '@mui/material/Switch';

// axios import
import axios from 'axios'

//components import
import Login from '../components/login'
import Register from '../components/register'

import styles from '../styles/css/checkin.module.css'
import { useNavigate } from 'react-router-dom';

const checkIn = () => {
    const [register, setRegister] = useState(false)

    const formRef = useRef(null)

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const handleSwitch = () => {
        setRegister(!register)
        setError('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let result = false
        let body = {}
        if (register) {

            const regexForExtractOnlyName = /^.*\\(.*)$/
            const profileImageName = formRef.current[2].value.replace(regexForExtractOnlyName, '$1')
            body = {
                name: formRef.current[0].value,
                password: formRef.current[1].value,
                myProfile: profileImageName
            }

            result = await axios.post('/user', body)

        } else {

            body = {
                name : formRef.current[0].value,
                password: formRef.current[1].value,
            }

            result = await axios.get('/user/name/getByNamePass', { params: body })
        }
    
        
        (result.data.body !== null) ? navigate(`/${result.data.body._id}`) : setError('Usuario no identificado')
    }

    return (
        <section className={styles.checkin}>
            <div>
                <h1>Bienvenidos al chat!</h1>
                <Switch onChange={handleSwitch} sx={{
                    'transform': 'scale(1.2)'
                }}/>
            </div>
            <h2 className={styles.loginState}>{register ?  'registrarse' : 'logearse '}</h2>
            <form className={styles.checkForm} onSubmit={handleSubmit} ref={formRef}>
            { register 
                ? <Register /> 
                : <Login />}
                <button className={styles.checkButton} onClick={() => handleSubmit}>Enviar</button>
            </form>
            <h2 className={styles.error}>{error}</h2>
        </section>
    )
}

export default checkIn