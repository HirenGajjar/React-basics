import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './Button.jsx'
import Hello from './Hello.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button/>
    <Hello/>
  </React.StrictMode>,
)
