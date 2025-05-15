import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PersonalityQuiz from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <PersonalityQuiz />
  </StrictMode>,
)
