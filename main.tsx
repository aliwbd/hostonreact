import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {image } from '\public\hoston_logo.jpeg'
 import About from './about.tsx' 
import Contactus from './contactus.tsx'
import Footer from './footer.tsx'
 import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  
    <About /> 
    <Contactus />
    <Footer />
  </StrictMode>
)
