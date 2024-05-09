/* eslint-disable react/prop-types */

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
                            doubtAnswer="Os serviços oferecidos são: Massagem Terapéutica, Massagem Anti-Stress, Massagem Relaxante e Drenagem linfática, você pode ver todos eles navegando na nossa página inicial!."
                        />

                        <Accordion
                            doubtName="Como funciona o agendamento?"
                            doubtAnswer="Escolha quais tratamentos tem interesse no momento do agendamento, após isso, entraremos em contato para confirmar seu agendamento pelo telefone fornecido."
                        />

                        <Accordion
                            doubtName="Qual o valor dos serviços?"
                            doubtAnswer="Os valores variam de acordo com cada um dos tratamentos, você pode encontrar os valores navegando no site"
                        />

                        <Accordion
                            doubtName="Quanto tempo duram as sessões?"
                            doubtAnswer="Temos sessões que variam de 30 minutos á 1 hora."
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