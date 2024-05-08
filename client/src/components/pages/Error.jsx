import Navbar from "../navigation/Navbar"
import { NavLink } from "react-router-dom"
import ButtonIcon from "../navigation/ButtonIcon"

export default function Error() {
    return (
        <>

            <Navbar />
            <div className="container">
                <div className="container-content">

                    <h1>Algo deu errado</h1>
                    <p>Parece que algo deu errado com seu pagamento, tente refazer seu agendamento novamente, ou nos mande uma mensagem</p>

                    <NavLink to="https://www.instagram.com/danyterapia/">
                        <ButtonIcon
                            image="/whatsapp.png"
                            text="Tirar Dúvidas no Whatsapp"
                            specialStyleSheet="whatsapp-button"
                        />
                    </NavLink>
                    <NavLink to="/">
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