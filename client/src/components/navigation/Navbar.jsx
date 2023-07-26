
import {useState} from "react"
import Doubts from "./Doubts"

export default function Navbar() {

    const [showDoubtsModal, setShowDoubtsModal] = useState(false)
    
    const handleShowDoubtsModal = () => {
        setShowDoubtsModal(true)
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

            {showDoubtsModal && <Doubts />}

        </>
    )
}