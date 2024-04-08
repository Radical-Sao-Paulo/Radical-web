'use client'
import {
    Main,
    Article_project,
    Header_project,
    Title_project,
    Subtitle_project,
    Section_description_project,
    Label_description_project,
    Barra_project,
    Buttons_project,
    Button_project
} from './style'

import Navbar from '../../components/navbar'

export default function Home() {
    return (
        <Main>
            {/* Component Navbar*/}
            <Navbar />

            {/* Article main*/}
            <Article_project>
                <Header_project>
                    <Title_project>Radical</Title_project>
                    <Subtitle_project>São Paulo</Subtitle_project>
                </Header_project>
                <Section_description_project>
                    <Label_description_project>O Projeto Radical São Paulo é um retiro espiritual cristão com duração de um final de semana em um sítio próximo à Aruja - SP, onde centenas de pessoas, famílias e igrejas estão sendo impactadas e desafiadas a tomarem atitudes que agradem à Deus no seu viver diário.</Label_description_project>
                    <Barra_project></Barra_project>
                </Section_description_project>
                <Buttons_project>
                    <Button_project>Inscreva-se</Button_project>
                    <Button_project>Saiba Mais</Button_project>
                </Buttons_project>
            </Article_project>
        </Main>
    )
}