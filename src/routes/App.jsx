import ListChats from '../views/listChats'
import MainView from '../views/mainView'
import CheckIn from '../views/checkIn'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from '../styles/css/app.module.css'

function App () {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<CheckIn />}/>
          <Route exact path="/:userID" element={<ListChats />}/>
          <Route exact path="/chat/:id" element={<MainView />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
