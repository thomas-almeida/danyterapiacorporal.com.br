import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./components/pages/Home"
import Scheduling from "./components/pages/Scheduling"
import Thanks from "./components/pages/Thanks.jsx"
import Navbar from "./components/navigation/Navbar"

const router = createBrowserRouter([
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
