import styled, { ThemeProvider } from "styled-components";
import BioSpace from "./components/bio/BioSpace"

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
/*
const theme = {
    background: "#273043",
    foreground: "#9197AE",
    accent: "#DD0426",
    light: "#EFF6EE",
    dark: "#93032E",
};
*/
/* 
	Logo
	Header
	Bio
	Projects container
	Project template 
*/
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

              <BioSpace />

            </Background>
        </ThemeProvider>
    );
}

export default App;
