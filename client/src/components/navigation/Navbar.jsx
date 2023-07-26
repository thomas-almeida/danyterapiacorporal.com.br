
import {useState} from "react"
import Doubts from "./Doubts"

export default function Navbar() {

    const [showDoubtsModal, setShowDoubtsModal] = useState(false)
    
    const handleShowDoubtsModal = () => {
        setShowDoubtsModal(true)
    }

    const handleCloseDoubtsModal = () => {
        setShowDoubtsModal(false)
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/vite.svg" alt="logo" />
                        </a>
                    </li>
                    <li onClick={handleShowDoubtsModal}>
                        Dúvidas?
                    </li>
                </ul>
            </nav>

            <Doubts 
                show={showDoubtsModal} 
                onClose={handleCloseDoubtsModal} 
            />
        </>
    )
}