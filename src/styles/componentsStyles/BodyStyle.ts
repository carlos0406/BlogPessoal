import styled from "styled-components";

export const Container = styled.div`

color:${(props) => props.theme.colors.text} ;
border: none;

border-bottom-right-radius:2rem;
border-bottom-left-radius:2rem;
display:grid;
grid-template-columns: 1fr 1fr;

@media (max-width:1700px){
    display:grid;
    grid-template-columns: 1fr;
}







`