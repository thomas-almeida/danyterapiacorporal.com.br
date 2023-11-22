
import Accordion from "./Accordion"
import ButtonIcon from "./ButtonIcon"

export default function Doubts({ show, onClose }) {

    if (!show) {
        return null
    }

    return (
        <>
            <div className="doubts-container">
                <div className="doubts-container-content">
                    <h2>Perguntas Frequentes</h2>

                    <div className="accordion-items">

                        <Accordion
                            doubtName="Quais os serviços oferecidos?"
                            doubtAnswer="Os serviços oferecidos são: Serviço A, serviço B e serviço C, você pode ver todos eles navegando no site."
                        />

                        <Accordion
                            doubtName="Como funciona o agendamento?"
                            doubtAnswer="O pagamento é feito ao chegar no local, antes do seu atendimento marcado."
                        />

                        <Accordion
                            doubtName="Qual o valor dos serviços?"
                            doubtAnswer="Os valores variam de acordo com cada um dos tratamentos, voce pode encontrar os valores navegando no site"
                        />

                        <Accordion
                            doubtName="Quanto tempo duram as sessões?"
                            doubtAnswer="As sessões duram cerca de 1 hora cada."
                        />

                    </div>

                    <ButtonIcon
                        image="/confirm.png"
                        text="Entendi"
                        method={onClose}
                    />

                </div>
            </div>
        </>
    )
}