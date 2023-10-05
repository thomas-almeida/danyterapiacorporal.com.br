
import { NavLink } from "react-router-dom"
import ServiceCard from "../ui/ServiceCard"
import InstagramEmbed from "react-instagram-embed"

export default function Home() {

    const address = 'https://www.google.com.br/maps/place/R.+Clevel%C3%A2ndia,+128a+-+Cidade+Patriarca,+S%C3%A3o+Paulo+-+SP,+03555-050/@-23.5383317,-46.5014327,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce60b5234cb645:0x1029950f1ac6c1c!8m2!3d-23.5383366!4d-46.4988578!16s%2Fg%2F11fkr31j57?entry=ttu'

    const images = [
       'public/image-0.jpg','public/image-1.jpg','c'
    ]

    return (
        <>
            <div className="container">
                <div className="container-content">
                    <h1>Sinta-se bem consigo mesmo com terapias corporais personalizadas</h1>

                    <p>
                        Cuide de você com Terapia Corporal e melhore sua qualidade de vida, agende um horário para cuidar do seu bem-estar.
                    </p>

                    <a href={address} target="_blank" id="endereco">Rua Endereço A, 123 - Bairro</a>

                    <div className="item-spaces">
                        <NavLink to="/agendamento#topo">
                            <button className="button confirm-button">Agendar um horário</button>
                        </NavLink>
                        <button className="button whatsapp-button">Tirar Dúvidas no Whatsapp</button>
                    </div>

                    <h2 className="divider-title">Serviços</h2>

                    <p>
                        Trabalhamos com agendamentos e pacotes, onde você consegue utilizar vários serviços em um atendimento só.
                    </p>

                    <h2>Avulsos, pagamento por atendimento</h2>

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

                    <h2 className="divider-title" id="pacotes">Pacotes, pagamentos mensais</h2>

                    <div>
                        <p>
                            Pacotes são atendimentos feitos no mes, voce escolhe entre os serviços e a cada semana garante seu atendimento com maior tranquilidade.
                        </p>

                        <p>
                            Escolhe entre x seriviços e marque seus atendimentos no mes, feche pacotes conosco através do whatsapp
                        </p>
                        <button className="button whatsapp-button">Sobre Pacotes</button>
                    </div>

                    <br />
                    <h2 className="divider-title">Dany</h2>

                    <p>
                        Empreendedora no ramo da estética corporal há mais de 8 anos  e com mais de 500 clientes satisfeitos, Lorem Ipsum conta com um espaço de Lorem Ipsum aconchegante e de fácil acesso, pronto para fazer com que sua experiencia traga o maior bem-estar possível.
                    </p>

                    <div className="image-galery">
                        <img src={images[0]} alt="Terapia corporal" />
                        <img src="" alt="Terapia corporal" />
                        <img src="" alt="Terapia corporal" />
                    </div>

                    <InstagramEmbed
                        url="https://www.instagram.com/p/CoUWWzTOlrs"
                        maxWidth={300}
                        hideCaption={false}
                    />

                    <a href="#">veja mais no instagram</a>

                    <p>
                        Não deixe o bem-estar do seu corpo e mente para depois!, começe a cuidar de voce hoje mesmo!
                    </p>

                    <div className="item-spaces">
                        <NavLink to="/agendamento#topo">
                            <button className="button confirm-button">Agendar um horário</button>
                        </NavLink>
                        <button className="button whatsapp-button">Tirar Dúvidas no Whatsapp</button>
                    </div>

                </div>
            </div>
        </>
    )
}