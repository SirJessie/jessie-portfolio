import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// STYLES
import './styles/main.css'
import './styles/card.css'
import './styles/responsive_layout.css'
import './styles/single_page.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
