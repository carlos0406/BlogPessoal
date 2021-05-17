import { Container } from "../styles/componentsStyles/HeaderStyles";
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

type HeaderProps = {
  toggleTheme: () => void;
};

export function Header({ toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>

      <img src="https://github.com/carlos0406.png" alt="Nome da pessoa " />
      <p >MyProjectSpace</p>


      <div>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={15}
          offColor="#fff"
          onColor="#000"
        />
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
