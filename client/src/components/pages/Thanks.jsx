import Navbar from "../navigation/Navbar"
import { NavLink } from "react-router-dom"
import ButtonIcon from "../navigation/ButtonIcon"

export default function Thanks() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container-content">

                    <img className="banner-cover" src="/banner-large.png" alt="" />

                    <h1>Obrigado</h1>
                    <p>Em alguns instantes, entraremos em contato com você para confirmar seu agendamento. Enquanto isso, que tal conferir nosso trabalho no Instragram, ou se ficou alguma dúvida tirar elas no nosso whatsapp</p>
                    <NavLink to="https://www.instagram.com/danyterapia/">
                        <ButtonIcon
                            image="/instagram.png"
                            text="Veja Mais no Instagram"
                            specialStyleSheet="instagram-button"
                        />
                    </NavLink>
                    <NavLink to="https://wa.link/ligqqv">
                        <ButtonIcon
                            image="/whatsapp.png"
                            text="Tirar Dúvidas no Whatsapp"
                            specialStyleSheet="whatsapp-button"
                        />
                    </NavLink>
                    <NavLink to="/agendamento">
                        <ButtonIcon
                            image="/favicon.png"
                            text="Voltar ao Início"
                        />
                    </NavLink>

                </div>
            </div>
        </>

    )
}