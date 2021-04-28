import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.darkBlue} 70%,
    ${(props) => props.theme.colors.lighBlue}
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

  .vrau {
    height: 2rem;

    margin-left: 1rem;
    padding: 0rem 1rem;
    border-left: 1px solid white;
    font-family: sans-serif;
    font-size: 1.25rem;
    color: white;
  }
`;
