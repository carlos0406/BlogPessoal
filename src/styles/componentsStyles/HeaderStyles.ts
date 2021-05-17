import styled from "styled-components";

export const Container = styled.header`
 

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border: none;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary} 80%,
    ${(props) => props.theme.colors.secundary}
  );
  height: 5rem;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }

  div {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      padding: 0 3rem;
    }
  }

  p {
    height: 2rem;

    margin-left: 1rem;
    padding: 0rem 1rem;
    border-left: 1px solid white;
    font-family: sans-serif;
    font-size: 1.25rem;
    color: white;
  }


  @media (max-width:1000px){
      img{
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
      }
      div{
        svg{
          width: 2rem;
          height: 2rem;
        }
      }      
  }

  @media (max-width:530px){
    width: 100vw;
    img{
        height: 2rem;
        width: 2rem;

      }

      p{
        height: 1rem;
        font-size: 0.825rem;
      }
  }
  
`;
