
import { useState } from "react"
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
                        <a href="/">
                            <img src="/logo.svg" alt="logo" />
                        </a>
                    </li>
                    <li onClick={handleShowDoubtsModal}>
                        <b>Dúvidas?</b>
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