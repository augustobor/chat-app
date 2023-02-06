import './App.css'
import ListChats from './containers/listChats'

import styles from './styles/css/app.module.css'

function App () {
  return (
    <div className={styles.App}>
      <ListChats />
    </div>
  )
}

export default App
