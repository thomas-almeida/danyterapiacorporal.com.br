import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/navigation/Navbar"

import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Scheduling from './components/pages/Scheduling'
import Thanks from './components/pages/Thanks'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Scheduling />} />
        <Route path="/obrigado" element={<Thanks />} />
      </Routes>
      <Analytics/>
    </>
  )
}

export default App
