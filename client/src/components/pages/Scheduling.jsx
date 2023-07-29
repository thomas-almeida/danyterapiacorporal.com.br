
import ServicesOptions from "../options/ServiceOptions"

export default function Scheduling() {
    return (
        <div className="container">
            <div className="container-content">

                <h3>Agendamento</h3>
                <p>
                    Ao final do agendamento, voce receberá uma confirmação de horário no seu Whatsapp para que possamos confirmar sua presença.
                </p>

                <div className="schedule-form-container">
                    <div className="schedule-form-content">

                        <form action="">

                            <label htmlFor="">Seu Nome</label>
                            <input type="text" name="" id="" placeholder="Como prefere ser chamado(a)?" />

                            <label htmlFor="">Whatsapp</label>
                            <input type="text" name="" id="" placeholder="Como prefere ser chamado(a)?" />

                            <h4>Selecione o Serviço</h4>
                            <p>
                                Escolha os serviços que deseja e pague no estabelecimento, caso esteja procurando sobre pacotes entre em contato <a href="/">por aqui.</a>
                            </p>
                            <ServicesOptions />

                            <label htmlFor="">Selecione uma Data</label>
                            <input type="date" name="" id="" />

                            <label htmlFor="">Selecione um Horário</label>
                            <input type="time" name="" id="" />

                            <label htmlFor="">Código de Indicação (Opcional)</label>
                            <input type="text" name="" id="" placeholder="Nome de quem nos indicou" />

                            <input type="submit" value="Confirmar Agendamento" />

                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}