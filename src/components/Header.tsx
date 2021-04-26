import { Container } from "../styles/componentsStyles/HeaderStyles";
import { FaLinkedinIn, FaCode } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

export function Header() {
  return (
    <Container>
      <img src="https://github.com/carlos0406.png" alt="Nome da pessoa " />
      <p className="vrau">MyProjectSpace</p>
      <FaCode size={50} color="white" />

      <div>
        <a target="_blank" href="https://github.com/carlos0406">
          <DiGithubBadge size={60} color="white" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/carlos-andrade-b35b1b138/"
        >
          <FaLinkedinIn size={50} color="white" />
        </a>
      </div>
    </Container>
  );
}
