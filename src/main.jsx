import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './routes/home'
import Planos from './routes/planos'
import ErrorPage from './routes/error/errorpage'
import Contato from './routes/contato'
import { RouterProvider, createHashRouter } from 'react-router-dom'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // dica: use index:true para a rota raiz aninhada
      { index: true, element: <Home /> },
      { path: 'planos', element: <Planos /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
