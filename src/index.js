import * as dotenv from 'dotenv'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
dotenv.config()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
