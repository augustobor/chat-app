import ListChats from '../views/listChats'
import MainView from '../views/mainView'
import CheckIn from '../views/checkIn'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Redux imports
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from '../redux/store.js'

import styles from '../styles/css/app.module.css'


const persistor = persistStore(store)

function App () {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className={styles.App}>
            <Routes>
              <Route exact path="/" element={<CheckIn />}/>
              <Route exact path="/:userID" element={<ListChats />}/>
              <Route exact path="/chat/:id" element={<MainView />}/>
            </Routes>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
