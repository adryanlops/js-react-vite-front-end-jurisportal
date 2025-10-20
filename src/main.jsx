import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
