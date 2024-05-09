/* eslint-disable no-undef */

import { useState } from "react"
import axios from "axios"
import { format } from "date-fns"
import ServicesOptions from "../options/ServiceOptions"
import InfoModal from "../navigation/InfoModal"
import services from "../options/services"
import Navbar from "../navigation/Navbar"

export default function Scheduling() {

    const [formData, setFormData] = useState({
        nome: "",
        whatsapp: "",
        data: "",
        horario: "",
        indicacao: "",
        pagamento: "Pago no agendamento",
        servicos: []
    })

    const [isInfoModalOpened, setInfoModalOpen] = useState(false)
    const [isLoading, setloading] = useState(false)


    const messages = {
        successWithoutPay: 'Seu agendamento foi feito com sucesso!, em alguns instantes entraremos em contato para confirmar seu atendimento.',
        successWithPay: 'Seu agendamento foi feito com sucesso!, o próximo passo é seguir com o pagamento. você será redirecionado em alguns instantes'
    }

    const modalInfos = {
        succesInfo: 'Agendamento Feito com Sucesso!',
        succesInfoMessage: formData.pagamento == 'Pago no agendamento' ? messages.successWithPay : messages.successWithoutPay
    }

    const handleSubmit = async (event) => {

        const endpoints = {
            sendSchedule: "https://nino-scheduler-api.onrender.com/send-schedule",
        }

        event.preventDefault()

        setloading(true)

        const formatedDate = format(new Date(formData.data), "dd/MM/yyyy")

        const messageContents = {
            mensagem:
                `✉️ Novo Agendamento.
            🙍🏻‍♂️ Nome: ${formData.nome},
            📞 WhatsApp: ${formData.whatsapp},
            📅 Data: ${formatedDate},
            ⏱ Horário: ${formData.horario},
            💆🏻‍♀️ Serviços: ${formData.servicos.join(", ")},
            🎟 Código: ${formData.indicacao || "Nenhum"}.`
        }

        try {
            await axios.post(endpoints.sendSchedule, messageContents, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setInfoModalOpen(true)
            window.location.href = '/agendamento#checked'
        } catch (error) {
            console.log('Error', error)
            alert('Erro na Requisição', error)
        } finally {
            setloading(false)
        }

        let productsStripe = {
            products: []
        }

        services.forEach(service => {
            if (formData.servicos.includes(service.name)) {
                productsStripe.products.push({ id: service.stripeId })
            }
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleServiceChange = (event) => {
        const { value, checked } = event.target
        setFormData((prevData) => ({
            ...prevData,
            servicos: checked
                ? [...prevData.servicos, value]
                : prevData.servicos.filter((service) => service !== value)
        }))
    }

    return (
        <>
            <Navbar />

            <div className="container">
                <div className="container-content" id="topo">

                    <img className="banner-cover" src="/banner-schedule.png" alt="" />

                    <h2 className="my-low">Agendar Horário</h2>
                    <p>
                        Ao final do agendamento, você receberá uma confirmação de horário no seu Whatsapp para que possamos confirmar sua presença.
                    </p>

                    <div className="container my-low">

                        <form action="" method="POST" onSubmit={handleSubmit} disabled={isLoading}>

                            <label htmlFor="nome">Seu Nome</label>
                            <input type="text" name="nome" id="nome" onChange={handleInputChange} placeholder="Como prefere ser chamado(a)?" required />

                            <label htmlFor="whatsapp" id="whatsapp-label">Whatsapp</label>
                            <input type="tel" name="whatsapp" id="whatsapp" onChange={handleInputChange} placeholder="Para mantermos contato" required />

                            <h4>Escolha o Atendimento</h4>
                            <p>
                                Escolha os serviços que deseja e pague no estabelecimento, caso esteja procurando sobre pacotes entre em contato <a className="link" href="https://wa.link/ligqqv" target="blank">por aqui.</a>
                            </p>

                            <ServicesOptions
                                selectedServices={formData.servicos}
                                onServiceChange={handleServiceChange}
                            />

                            <p>Sobre o tempo da sessão do atendimento, não se preocupe, isso será perguntado a você para que possa combinar certinho no momento de confirmar seu agendamento.</p>

                            <label htmlFor="data">Escolha uma Data</label>
                            <p className="tip"></p>
                            <input type="date" name="data" id="data" onChange={handleInputChange} required />

                            <label htmlFor="horario">Escolha um Horário</label>
                            <input type="time" name="horario" id="horario" onChange={handleInputChange} required />

                            <label htmlFor="indicacao">Código de Indicação (Opcional)</label>
                            <input type="text" name="indicacao" id="indicacao" onChange={handleInputChange} placeholder="Nome de quem nos indicou" />

                            <input
                                type="submit"
                                className="button confirm-button"
                                value={isLoading ? "Agendando..." : "Confirmar Agendamento"}
                                disabled={isLoading}
                            />

                        </form>

                        {
                            isInfoModalOpened && (
                                <InfoModal
                                    info={modalInfos.succesInfo}
                                    message={modalInfos.succesInfoMessage}
                                    visibleButton={true}
                                />
                            )
                        }

                    </div>
                </div>


            </div>
        </>
    )
}