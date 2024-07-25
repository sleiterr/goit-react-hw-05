import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// імпорт стилів modern-normalize
import 'modern-normalize';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
