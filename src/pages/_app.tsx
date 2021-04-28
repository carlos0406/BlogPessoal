import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import usePersistedState from "../utils/userPersistedState";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
