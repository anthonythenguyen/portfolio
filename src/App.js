import styled, { ThemeProvider } from "styled-components";
import BioSpace from "./components/bio/BioSpace";

import Header from "./components/Header";
//Change this eventually to a photo of yourself
import Pic from "./assets/images/icon.png";
import Projects from "./components/projects/Projects";

const theme = {
  background: "#273043",
  foreground: "#9197AE",
  accent: "#DD0426",
  light: "#0CBABA",
  dark: "#0CBABA",
};

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
`;

const GridChild = styled.div`
  width: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  min-height: 100vh;
  align-items: center;
`;

const list = [
  {
    title: "Subnote",
    image1: Pic,
    image2: Pic,
    description:
      "Using Ruby on Rails, ReactJS, HTML5, CSS Modules. It is a note taking webapp. Designed to allow any user to create notes and update them live to help store them digitally.",
  },
  {
    title: "Chatroom App",
    image1: Pic,
    image2: Pic,
    description:
      "Using Firestore/Firebase and Kotlin/Java in Android Studio. This is an android application. Created to allow users to be able to message other users with real-time updates.",
  },
  {
    title: "A Website for a Theoretical Company",
    image1: Pic,
    image2: Pic,
    description:
      "Using HTML5, Bootstrap, CSS and JavaScript. The purpose of the website was to advertise/showcase our local resort, Brian Head. Explaining and showcasing to anyone who accesses the site all the events and activities it has to offer during the different seasons.",
  },
  {
    title: "Minecraft Mod",
    image1: Pic,
    image2: Pic,
    description:
      "Using Java, I created my very own modification/addition to the already popular game Mineacraft. I also incorporated some designs to help showcase/explain Digital Electronics to the Introduction to Programming students.",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Header>Anthony Nguyen</Header>
        <BioSpace>
          <GridBox>
            <GridChild>
              <Img src={Pic} />
            </GridChild>
            <GridChild>
              <p>
                Newly graduated Computer Science major. I grew up amazed by
                technology and knew that my future had to contain an aspect of
                the technological field in it. I started Software Development
                and eventually branched out to Web Development also branching
                into Full Stack Development.
              </p>
            </GridChild>
          </GridBox>
        </BioSpace>

        <Projects projectsInfo={list}></Projects>
      </Background>
    </ThemeProvider>
  );
}

export default App;
