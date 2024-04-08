import styled from "styled-components";
import Image from "next/image";

export const Navbar_container = styled.nav`
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Navbar_image_Logo = styled(Image)`
    width: 50px;
    height: 50px;
    background-color: #c60716;
`

export const Navbar_container_itens = styled.ul`
    display: flex;
`

export const Navbar_itens = styled.li`
    color: aliceblue;
    padding: 20px;
    position: relative;
    font-size: 15px;
    animation: move-up .7s ease-out;
    list-style-type: none;
    cursor: pointer;

    &::after {
        content: ' ';
        width: 0%;
        height: 2px;
        background-color: #c60716;
        left: 0;
        bottom: 0;
        position: absolute;
        transition: 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`