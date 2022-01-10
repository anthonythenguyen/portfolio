import styled, { ThemeProvider } from "styled-components";
import BioSpace from "./components/bio/BioSpace";

import Header from "./components/Header";
//Change this eventually to a photo of yourself
import Me from "./assets/images/photo.jpg";

import Subnote1 from "./assets/images/Subnote1.PNG";
import Subnote2 from "./assets/images/Subnote2.PNG";

import Android1 from "./assets/images/Android1.png";
import Android2 from "./assets/images/Android2.png";

import Theoretical1 from "./assets/images/Theoretical1.PNG";
import Theoretical2 from "./assets/images/Theoretical2.PNG";

import Minecraft1 from "./assets/images/Minecraft1.PNG";
import Minecraft2 from "./assets/images/Minecraft2.PNG";

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
  max-width: 55%;
  max-height: 100%;
  border-radius: 12px;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  min-height: 100vh;
  align-items: center;
`;

const BioDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
`;

const list = [
  {
    title: "Subnote",
    image1: Subnote1,
    image2: Subnote2,
    description:
      "Using Ruby on Rails, ReactJS, HTML5, CSS Modules. Subnote is a note taking webapp, designed to allow any user to create their own personal notes digitally with live updating.",
  },
  {
    title: "Chatroom App",
    image1: Android1,
    image2: Android2,
    description:
      "Using Firestore/Firebase and Kotlin/Java in Android Studio. This is an android application created to allow users to be able to message other users with real-time updates.",
  },
  {
    title: "A Website for a Theoretical Company",
    image1: Theoretical1,
    image2: Theoretical2,
    description:
      "Using HTML5, Bootstrap, CSS and JavaScript. The purpose of the website was to advertise/showcase our local resort, Brian Head. Explaining and showcasing to anyone who accesses the site all the events and activities it has to offer during the different seasons.",
  },
  {
    title: "Minecraft Mod",
    image1: Minecraft1,
    image2: Minecraft2,
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
              <Img src={Me} />
            </GridChild>
            <BioDescription>
              <p>
                My fascination with technology budded as a child, inspiring me
                to study software development and after spending time coding I
                branched my education and experience into mobile app development
                then to web development and full stack development.
              </p>
            </BioDescription>
          </GridBox>
        </BioSpace>

        <Projects projectsInfo={list}></Projects>
      </Background>
    </ThemeProvider>
  );
}

export default App;
