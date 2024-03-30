import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Button from './Button.jsx'
import Hello from './Hello.jsx'
import Random from './Random.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button/>
    <Hello/>
    <Random/>
  </React.StrictMode>,
)
