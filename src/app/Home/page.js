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
    Button_project,
    About_article,
    About_section,
    About_title,
    About_text,
    About_image
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
            <About_article>
                <About_section>
                    <About_title>Quem Somos?</About_title>
                    <About_text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </About_text>
                    <About_text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</About_text>
                </About_section>
                <About_image>  </About_image>
            </About_article>
        </Main>
    )
}