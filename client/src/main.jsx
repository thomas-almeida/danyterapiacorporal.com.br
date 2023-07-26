import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./components/pages/Home"
import Scheduling from "./components/pages/Scheduling"
import Thanks from "./components/pages/Thanks.jsx"
import Error from './components/pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/agendamento",
        element: <Scheduling />
      },
      {
        path: "/agendamento/obrigado",
        element: <Thanks />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
