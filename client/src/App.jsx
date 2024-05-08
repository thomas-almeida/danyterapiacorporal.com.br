import { Analytics } from '@vercel/analytics/react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import Scheduling from './components/pages/Scheduling'
import Thanks from './components/pages/Thanks'
import Error from './components/pages/Error'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamento" element={<Scheduling />} />
          <Route path="/obrigado" element={<Thanks />} />
          <Route path="/erro" element={<Error />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  )
}

export default App
