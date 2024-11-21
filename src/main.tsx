import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/01_app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
