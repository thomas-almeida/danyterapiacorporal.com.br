
import ServiceCard from "../ui/ServiceCard"

export default function Home() {
    return (
        <>
            <div>
                <h1>Sinta-se bem consigo mesmo com terapias corporais personalizadas</h1>

                <p>
                    Cuide de você com Terapia Corporal e melhore sua qualidade de vida, agende um horário para cuidar do seu bem-estar.
                </p>

                <h4>Rua Endereço A, 123 - Bairro</h4>

                <button className="button confirm-button">Agendar um horário</button>
                <button className="button confirm-button">Tirar dúvidas no Whatsapp</button>

                <h2>Serviços</h2>
                <p>
                    Trabalhamos com agendamentos e pacotes, onde você consegue utilizar vários serviços em um atendimento só.
                </p>

                <h3>Avulsos, pagamento por atendimento</h3>

                <ServiceCard
                    serviceName="Massagem Terapeutica"
                    servicePrice="R$ 100,00/1h"
                    serviceDescription="Serviço A sendo detalhado de forma simples."
                />

                <ServiceCard
                    serviceName="Massagem Relaxante"
                    servicePrice="R$ 100,00/1h"
                    serviceDescription="Serviço A sendo detalhado de forma simples."
                />

                <ServiceCard
                    serviceName="Massagem Anti-stress"
                    servicePrice="R$ 100,00/1h"
                    serviceDescription="Serviço A sendo detalhado de forma simples."
                />

                <ServiceCard
                    serviceName="Drenagem Linfática"
                    servicePrice="R$ 100,00/1h"
                    serviceDescription="Serviço A sendo detalhado de forma simples."
                />

                <ServiceCard
                    serviceName="Aplicação e Confecção de Mega Hair Adesivo"
                    servicePrice="R$ 100,00/1h"
                    serviceDescription="Serviço A sendo detalhado de forma simples."
                />

                <h3>Pacotes, pagamentos mensais</h3>

                <div>
                    <p>
                        Pacotes são atendimentos feitos no mes, voce escolhe entre os serviços e a cada semana garante seu atendimento com maior tranquilidade.
                    </p>

                    <p>
                        Escolhe entre x seriviços e marque seus atendimentos no mes, feche pacotes conosco através do whatsapp
                    </p>
                    <button className="button confirm-button">Sobre Pacotes</button>
                </div>

                <h3>Sobre</h3>
                <p>
                    Empreendedora no ramo da estética corporal há mais de 8 anos  e com mais de 500 clientes satisfeitos, Lorem Ipsum conta com um espaço de Lorem Ipsum aconchegante e de fácil acesso, pronto para fazer com que sua experiencia traga o maior bem-estar possível.
                </p>

                <a href="#">veja mais no instagram</a>

                <p>
                    Não deixe o bem-estar do seu corpo e mente para depois!, começe a cuidar de voce hoje mesmo!
                </p>

                <button className="button confirm-button">Agendar um horário</button>
                <button className="button confirm-button">Tirar dúvidas no Whatsapp</button>

            </div>
        </>
    )
}