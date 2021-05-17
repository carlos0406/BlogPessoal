import styled from "styled-components";

export const CardContainer = styled.div`

background: ${(props) => props.theme.colors.red};
width: 50rem;
text-align: center;

border:3px solid ${(props) => props.theme.colors.red} ;
border-top:none;
margin-bottom:2rem ;
padding:1rem 0 1rem 0;
background: ${(props) => props.theme.colors.primary};
border-radius: 1rem;
margin: 2rem auto 0 auto;

@media (max-width:1000px){
    display:grid;
    width: 30rem;
}




h1{ width: 60%;
    margin: 0 auto;
    margin-bottom: 1rem;
    font-weight:700;
    border-bottom: 1px solid #f1f1f1;
}





`