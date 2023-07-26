
import Accordion from "./Accordion"

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
                       <Accordion 
                            doubtName="Quais os serviços oferecidos" 
                            doubtAnswer="Os serviços oferecidos são A, B, C" 
                        />
                    </div>

                    <button onClick={onClose} className="button confirm-button">Entendi!</button>

                </div>
            </div>
        </>
    )
}