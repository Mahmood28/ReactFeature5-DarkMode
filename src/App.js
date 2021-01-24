// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
//useState
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleCurrentTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  return (
    <ThemeProvider theme={theme[`${currentTheme}`]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>Dark Theme</ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
