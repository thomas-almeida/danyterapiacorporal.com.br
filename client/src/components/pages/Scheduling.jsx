
import { useState } from "react"
import axios from "axios"
import { format } from "date-fns"
import ServicesOptions from "../options/ServiceOptions"
import InfoModal from "../navigation/InfoModal"


export default function Scheduling() {

    const [isInfoModalOpened, setInfoModalOpen] = useState(false)
    const [isLoading, setloading] = useState(false)
    const modalInfos = {
        succesInfo: 'Agora é com a Dany!',
        succesInfoMessage: 'Seu agendamento foi feito com sucesso!, em alguns instantes entraremos em contato para confirmar seu atendimento.'
    }

    const [formData, setFormData] = useState({
        nome: "",
        whatsapp: "",
        data: "",
        horario: "",
        indicacao: "",
        servicos: []
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        setloading(true)

        const endpoint = "https://nino-scheduler-api.onrender.com/send-schedule";
        const formatedDate = format(new Date(formData.data), "dd/MM/yyyy")

        const messageContents = {
            mensagem: `✉️ Novo Agendamento.
            ✅ Nome: ${formData.nome},
            ✅ WhatsApp: ${formData.whatsapp},
            ✅ Data: ${formatedDate},
            ✅ Horário: ${formData.horario},
            ✅ Serviços: ${formData.servicos.join(", ")},
            ✅ Código: ${formData.indicacao || "Nenhum"}.`
        };

        try {
            await axios.post(endpoint, messageContents, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setInfoModalOpen(true)
            window.location.href = '/obrigado'
        } catch (error) {
            console.log('Error', error);
            alert('Erro na Requisição', error);
        } finally{
            setloading(false)
        }
    };


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
        <div className="container">
            <div className="container-content" id="topo">

                <h2 className="my-low">Agendar Horário</h2>
                <p>
                    Ao final do agendamento, voce receberá uma confirmação de horário no seu Whatsapp para que possamos confirmar sua presença.
                </p>

                <div className="container my-low">

                    <form action="" method="POST" onSubmit={handleSubmit} disabled={isLoading}> 

                        <label htmlFor="nome">Seu Nome</label>
                        <input type="text" name="nome" id="nome" onChange={handleInputChange} placeholder="Como prefere ser chamado(a)?" required />

                        <label htmlFor="whatsapp" id="whatsapp-label">Whatsapp</label>
                        <input type="tel" name="whatsapp" id="whatsapp" onChange={handleInputChange} placeholder="Para mantermos contato" required />

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
                        <input type="date" name="data" id="data" onChange={handleInputChange} required />

                        <label htmlFor="horario">Selecione um Horário</label>
                        <input type="time" name="horario" id="horario" onChange={handleInputChange} required />

                        <label htmlFor="indicacao">Código de Indicação (Opcional)</label>
                        <input type="text" name="indicacao" id="indicacao" onChange={handleInputChange} placeholder="Nome de quem nos indicou" />

                        <input 
                            type="submit" 
                            className="button confirm-button" 
                            value={isLoading ? "Aguarde..." : "Confirmar Agendamento"} 
                            disabled={isLoading}
                        />

                    </form>

                    {
                        isInfoModalOpened && (
                            <InfoModal
                                info={modalInfos.succesInfo}
                                message={modalInfos.succesInfoMessage}
                            />
                        )
                    }

                </div>
            </div>


        </div>
    )
}