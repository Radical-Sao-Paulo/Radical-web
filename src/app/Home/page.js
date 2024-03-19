'use client'
import {
    Main,
    Navbar,
    Navbar_image_Logo,
    Navbar_container_itens,
    Navbar_itens
} from './style'
import RadicalLogo from '../../../public/favicon.png'

export default function Home() {
    return (
        <Main>
            <Navbar>
                <Navbar_image_Logo src={RadicalLogo} />
                <Navbar_container_itens>
                    <Navbar_itens>1</Navbar_itens>
                    <Navbar_itens>2</Navbar_itens>
                    <Navbar_itens>3</Navbar_itens>
                    <Navbar_itens>4</Navbar_itens>
                    <Navbar_itens>5</Navbar_itens>
                </Navbar_container_itens>
            </Navbar>
        </Main>
    )
}