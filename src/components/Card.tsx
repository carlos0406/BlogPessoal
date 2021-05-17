import { CardContainer } from '../styles/componentsStyles/CardStyle'
import Image from 'next/image'
export function Card() {
    return (
        <CardContainer>

            <Image
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2009&q=80"
                width={1920}
                height={1080}
            />
            <h1>Titulo do projeto</h1>
            <p>Esse projeto foi feiot com isso isso e isso</p>
        </CardContainer>

    );
}