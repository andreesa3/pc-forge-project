import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ScrollTop from './components/scrollTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ScrollTop>  {/*per scrollare in alto ad ogni cambio route */}
  <App />
  </ScrollTop>
  </BrowserRouter>,
)
