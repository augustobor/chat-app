// react imports
import React from 'react'

// css imports
import style from '../styles/css/textBar.module.css'

// mui imports
import SendIcon from '@mui/icons-material/Send';

const textBar = () => {

    const handleSend = () => {
        console.log('si')
    }

    return (
        <footer className={style.textBar}>
            <input type='text' name="message" placeholder='insert your message here' />
            <div>
                <SendIcon sx={{
                    'transform': 'scale(2.5)',
                    'borderRadius': '50%',
                    'backgroundColor': '#03C988',
                    'padding': '20%'
                }} onClick={() => handleSend()}/>
            </div>
        </footer>
    )
}

export default textBar