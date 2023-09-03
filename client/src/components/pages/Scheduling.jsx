
import { useState } from "react"
import axios from "axios"
import ServicesOptions from "../options/ServiceOptions"


export default function Scheduling() {

    // state que atualiza os dados do form
    const [formData, setFormData] = useState({
        nome: "",
        whatsapp: "",
        data: "",
        horario: "",
        indicacao: "",
        servicos: []
    })

    // Evento que envia a requisição de mensagem
    const handleSubmit = async (event) => {

        event.preventDefault()

        const endpoint = "https://api.zenvia.com/v2/channels/whatsapp/messages"
        const headers = {
            "Content-Type": "application/json",
            "X-API-TOKEN": "zb5zBa0eDUzulsypi2I69x-772g6X47ivOM6"
        }

        const messageContents = 
        `💆🏻‍♀️💆🏻‍♂️🌷 Novo Agendamento 💆🏻‍♀️💆🏻‍♂️🌷\n
        Um novo agendamento foi feito no site.\n
        Nome: ${formData.nome},\n
        WhatsApp: ${formData.whatsapp},\n
        Data: ${formData.data},\n
        Horário: ${formData.horario},\n
        Serviços: ${formData.servicos.join(", ") + '\n' },\n
        Código: ${formData.indicacao || "Nenhum"}.\n`

        const requestBody = {
            from: "cuddly-kilogram",
            to: "5511949098312",
            contents: [
                {
                    type: "text",
                    text: messageContents
                }
            ]
        }

        try {
            
            const response = await axios.post(endpoint, requestBody, { headers })
            console.log('Response:', response.data)

            window.location.href = '/agendamento/obrigado'


        } catch (error) {
            console.log('Error', error)
            alert('Erro na Requisição', error)
        }

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
                : prevData.servicos.filter((service) => service != value)
        }))
    }


    return (
        <div className="container">
            <div className="container-content" id="topo">

                <h2 className="my-low">Agendar Horário</h2>
                <p>
                    Ao final do agendamento, voce receberá uma confirmação de horário no seu Whatsapp para que possamos confirmar sua presença.
                </p>

                <div className="container my-low">

                    <form action="" method="POST" onSubmit={handleSubmit}>

                        <label htmlFor="nome">Seu Nome</label>
                        <input type="text" name="nome" id="nome" onChange={handleInputChange} placeholder="Como prefere ser chamado(a)?" required/>

                        <label htmlFor="whatsapp" id="whatsapp-label">Whatsapp</label>
                        <input type="tel" name="whatsapp" id="whatsapp" onChange={handleInputChange} placeholder="Para mantermos contato" required/>

                        <h4>Selecione o Serviço</h4>
                        <p>
                            Escolha os serviços que deseja e pague no estabelecimento, caso esteja procurando sobre pacotes entre em contato <a className="link" href="/#pacotes">por aqui.</a>
                        </p>
                        <ServicesOptions
                            selectedServices={formData.servicos}
                            onServiceChange={handleServiceChange}
                        />

                        <label htmlFor="data">Selecione uma Data</label>
                        <p className="tip"></p>
                        <input type="date" name="data" id="data" onChange={handleInputChange} required/>

                        <label htmlFor="horario">Selecione um Horário</label>
                        <input type="time" name="horario" id="horario" onChange={handleInputChange} required/>

                        <label htmlFor="indicacao">Código de Indicação (Opcional)</label>
                        <input type="text" name="indicacao" id="indicacao" onChange={handleInputChange} placeholder="Nome de quem nos indicou" />

                        <input type="submit" className="button confirm-button" value="Confirmar Agendamento" />

                    </form>
                </div>
            </div>


        </div>
    )
}