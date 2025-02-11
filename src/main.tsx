import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { WeatherProvider } from './context/weatherContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <WeatherProvider>
        <App />
      </WeatherProvider>
  </React.StrictMode>
)
