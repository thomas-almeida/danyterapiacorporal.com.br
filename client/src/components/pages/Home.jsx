/* eslint-disable react/jsx-no-target-blank */

import { NavLink } from "react-router-dom"
import ServiceCard from "../ui/ServiceCard"
import ButtonIcon from "../navigation/ButtonIcon"
import services from "../options/services"
import Navbar from "../navigation/Navbar"

export default function Home() {

    const address = 'https://www.google.com.br/maps/place/R.+Cubat%C3%A3o,+193+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04013-040/@-23.5737921,-46.6471393,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5996e55e22b5:0xa080edeb3befea3!8m2!3d-23.573797!4d-46.6445644!16s%2Fg%2F11c298fzks?entry=ttu'

    const images = [
        '/room-01.jpeg', 
        '/room-02.jpeg',
        '/room-03.jpeg',

    ]

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container-content">

                    <img className="banner-cover" src="/banner-cover.png" alt="" />

                    <h1>Sinta-se bem consigo mesmo com terapias corporais personalizadas</h1>

                    <p id="space-bottom">
                        Cuide de você com Terapia Corporal e melhore sua qualidade de vida, agende um horário para cuidar do seu bem-estar.
                    </p>

                    <a href={address} target="_blank" id="endereco"> 🚩 Rua Cubatão 193 Sala 02 - Sobre Loja</a>

                    <div className="item-spaces">
                        <NavLink to="/agendamento">
                            <ButtonIcon
                                image="/ring-calendar.png"
                                text="Agendar um horário"
                            />
                        </NavLink>
                        <NavLink to="https://wa.link/ligqqv">
                            <ButtonIcon
                                image="/whatsapp.png"
                                text="Tirar Dúvidas no Whatsapp"
                                specialStyleSheet="whatsapp-button"
                            />
                        </NavLink>
                    </div>

                    <h2 className="divider-title">Atendimentos</h2>

                    <p>
                        Trabalhamos com agendamentos e pacotes, onde você consegue utilizar vários serviços em um atendimento só.
                    </p>

                    <h2>Avulsos, pagamento por atendimento</h2>

                    <div>
                        {
                            services.map((service) => {
                                return (
                                    <ServiceCard
                                        key={service.id}
                                        serviceName={service.name}
                                        ServicePriceOne={service.priceOne}
                                        ServicePriceOneTime={service.priceOneTime}
                                        ServicePriceTwo={service.priceTwo}
                                        ServicePriceTwoTime={service.priceTwoTime}
                                        serviceDescription={service.description}
                                    />
                                )
                            })
                        }
                    </div>


                    <h2 className="divider-title" id="pacotes">Pacotes, pagamentos mensais</h2>

                    <div>
                        <p>
                            Pacotes são atendimentos feitos no mes, você escolhe entre os serviços e a cada semana garante seu atendimento com maior tranquilidade.
                        </p>

                        <p>
                            Escolha entre  serviços e marque seus atendimentos no mês, feche pacotes conosco através do whatsapp
                        </p>

                        <NavLink to="https://wa.link/ligqqv">
                            <ButtonIcon
                                image="/whatsapp.png"
                                text="Fale Conosco"
                                specialStyleSheet="whatsapp-button"
                            />
                        </NavLink>
                    </div>

                    <br />
                    <h2 className="divider-title">Dany</h2>

                    <img className="banner-cover" src="/dany-bg.png" alt="" />

                    <p>
                        Empreendedora no ramo da estética corporal há mais de 8 anos e com mais de 500 clientes satisfeitos, conta com um espaço aconchegante e de fácil acesso, pronto para fazer com que sua experiencia traga o maior bem-estar possível.
                    </p>

                    <div className="image-galery">
                        <img src={images[0]} alt="Terapia corporal - local de atendimento" />
                        <img src={images[1]} alt="Terapia corporal - local de atendimento" />
                        <img src={images[2]} alt="Terapia corporal - local de atendimento" />
                    </div>

                    <NavLink to="https://www.instagram.com/danyterapia/">
                        <ButtonIcon
                            image="/instagram.png"
                            text="Veja Mais no Instagram"
                            specialStyleSheet="instagram-button"
                        />
                    </NavLink>

                    <br />
                    <br />

                    <p>
                        Não deixe o bem-estar do seu corpo e mente para depois!, começe a cuidar de você hoje mesmo!
                    </p>

                    <div className="item-spaces">
                        <NavLink to="/agendamento">
                            <ButtonIcon
                                image="/ring-calendar.png"
                                text="Agendar um horário"
                            />
                        </NavLink>
                        <NavLink to="https://wa.link/ligqqv">
                            <ButtonIcon
                                image="/whatsapp.png"
                                text="Tirar Dúvidas no Whatsapp"
                                specialStyleSheet="whatsapp-button"
                            />
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}