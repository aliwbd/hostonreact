import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {image } from '\public\hoston_logo.jpeg'
 import About from './about.tsx' 
import Contact from './contact.tsx'
 import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />, <Contact/>, <About/>
  </StrictMode>
)
