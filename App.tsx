import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import image from "\public\hoston_logo.jpeg";
// import Navigation from './components/Navigation.tsx';
// import './about.tsx'

import Contact from './contact.tsx'
import './App.css'

// import image from '/hoston_logo.png'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <div> 
      <h1>Houston Easy Repairs</h1>
       <img src="/hoston_logo.jpeg" width="200" height="100" alt="Description" />; 
    </div>
    
    
    </>
  )
}

export default App
