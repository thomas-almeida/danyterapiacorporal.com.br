/* eslint-disable react/prop-types */
import { useState } from "react"
import ButtonIcon from "./ButtonIcon"

export default function InfoModal({ info, message }, props) {

    const [isOpened, setModalOpen] = useState(true)

    const closeModal = () => {
        setModalOpen(false)
        window.location.href = '/'
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
                    <ButtonIcon
                        image="/confirm.png"
                        text="Entendi"
                        method={closeModal}
                        isVisible= {props.visibleButton}
                    />
                </div>
            </div>
        </>
    )

}