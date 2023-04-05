import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './routes/App'


axios.defaults.baseURL = 'http://localhost:3001/'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
