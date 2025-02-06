import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import City from './pages/City/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <City />
  </StrictMode>,
)
