import styled from "styled-components";

export const Main = styled.main`
    height: 95vh;
    background-color: #f8002f;
    background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);
`

export const Article_project = styled.article`
    height: calc(100vh - 100px);
`

export const Header_project = styled.header`
   display: flex;
   justify-content: center;
   flex-direction: column;
   height: calc(50vh - 50px);
`

export const Title_project = styled.h1`
   color: #ffffff;
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   font-size: 6rem;
   padding-left: 100px;
   animation: slide .7s ease-in-out;
`

export const Subtitle_project = styled.h2`
   color: #c60716;
   font-family: Impact, 'Arial Narrow Bold', sans-serif;
   font-size: 3.5rem;
   padding-left: 230px;
   animation: slide 1s ease-in-out;
`

export const Section_description_project = styled.section`
   width: 600px;
   text-align: left;
   padding-left: 100px;
`

export const Label_description_project = styled.label`
   color: #ffffff;
   position: relative;
   animation: opacity .7s;
`

export const Barra_project = styled.div`
   width: 50%;
   height: 3px;
   background-color: #c60716;
   margin-top: 5px;
`

export const Buttons_project = styled.section`
   padding-left: 100px;
   margin-top: 10px;
`

export const Button_project = styled.button`
   border: 1px solid #c60716;
   background-color: transparent;
   color: #ffffff;
   padding: 10px;
   border-radius: 20px;
   font-family: Impact;
   width: 200px;
   font-size: 20px;
   cursor: pointer;
   transition: ease-in-out .3s;
   margin: 5px;

   &:hover {
      background-color: rgb(198, 7, 22);
   }
`