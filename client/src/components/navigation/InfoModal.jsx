import { useState } from "react"

export default function InfoModal({ info, message }) {

    const [isOpened, setModalOpen] = useState(true)

    const closeModal = () => {
        setModalOpen(false)
    }

    const modalStyle = {
        display: isOpened ? 'flex' : 'none'
    }

    return (
        <>
            <div className="info-modal-container" style={modalStyle}>
                <div className="info-modal-content">
                    <h2>{info}</h2>
                    <p>{message}</p>
                    <button className="button confirm-button" onClick={closeModal}>
                        Entendi
                    </button>
                </div>
            </div>
        </>
    )

}