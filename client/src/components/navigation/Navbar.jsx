
import { useState } from "react"
import Doubts from "./Doubts"
import { NavLink } from "react-router-dom"

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
                        <NavLink to="/">
                            <img src="/dany-logoB.svg" alt="logo" />
                        </NavLink>
                    </li>
                    <li onClick={handleShowDoubtsModal}>
                        <p>Dúvidas?</p>
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