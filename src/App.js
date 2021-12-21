import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";

const theme = {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",

    background: "#26081C",
    foreground: "#0CBABA",
    accent: "#01BAEF",
    light: "#380036",
    dark: "#150811",
};

const Background = styled.div`
    background-color: ${(props) => props.theme.background};
    width: 100vw;
    height: 100vh;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Background>
                <Header>SheaBear19</Header>
            </Background>
        </ThemeProvider>
    );
}

export default App;
