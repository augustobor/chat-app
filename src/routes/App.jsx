import ListChats from '../containers/listChats'
import MainView from '../containers/mainView'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from '../styles/css/app.module.css'

function App () {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route exact path="/" element={<ListChats />}/>
          <Route exact path="/chat/:id" element={<MainView />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
