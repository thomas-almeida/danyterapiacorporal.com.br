export default function Doubts({show, onClose}) {

    if(!show) {
        return null
    }

    return (
        <>
            <div className="doubts-container">
                <div className="doubts-container-content">
                    <h2>Perguntas Frequentes</h2>

                    <div>

                    </div>

                    <button onClick={onClose} className="button confirm-button">Entendi!</button>

                </div>
            </div>
        </>
    )
}