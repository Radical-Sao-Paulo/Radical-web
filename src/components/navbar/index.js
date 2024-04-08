import {
    Navbar_container,
    Navbar_image_Logo,
    Navbar_container_itens,
    Navbar_itens
} from './style'
import RadicalLogo from '../../../public/favicon.png'

function Navbar() {
    return (
        <Navbar_container>
            <Navbar_image_Logo src={RadicalLogo} />
            <Navbar_container_itens>
                <Navbar_itens>Home</Navbar_itens>
                <Navbar_itens>Sobre o Projeto</Navbar_itens>
                <Navbar_itens>Regras</Navbar_itens>
                <Navbar_itens>Galeria</Navbar_itens>
                <Navbar_itens>Equipantes</Navbar_itens>
                <Navbar_itens>Contato</Navbar_itens>
                <Navbar_itens>Inscrição</Navbar_itens>
            </Navbar_container_itens>
        </Navbar_container>

    )
}

export default Navbar;