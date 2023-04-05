import React, { useState } from 'react'

import styles from '../styles/css/register.module.css'

const register = () => {
    const [file, setFile] = useState(false)

    return (
        <>
            <input type="text" name="name" placeholder='User'/>
            <input type="password" name="password" placeholder='Pass'/>
            <label className='profileImage' htmlFor="profileImage">{file ? `File uploaded` : `Profile image`} </label>
            <input className={styles.profileImage} 
                    type="file" 
                    name="profileImage" 
                    id="profileImage" 
                    onInput={() => setFile(!file)} />
        </>
    )
}

export default register