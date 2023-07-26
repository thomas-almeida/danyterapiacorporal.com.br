
import { Outlet } from "react-router-dom"
import Navbar from "./components/navigation/Navbar"
import Doubts from "./components/navigation/Doubts"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
