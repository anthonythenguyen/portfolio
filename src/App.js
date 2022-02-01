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

// #273043
const theme = {
  background: "#03254c",
  foreground: "#9197AE",
  accent: "#DD0426",
  light: "#00FFF5",
  dark: "#0CBABA",
};

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  grid-gap: 2em;
`;

const GridChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 55%;
  display: flex;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  max-height: 100%;
  border-radius: 12px;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  min-height: 100vh;
  align-items: center;
`;

const BioDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 2vh;
`;

const ProjectTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const ProjectTab = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: rgb(230, 241, 255);
  font-size: 32pt;
  font-weight: bold;
`;

const list = [
  {
    title: "Subnote",
    image1: Subnote1,
    image2: Subnote2,
    description:
      "Using Ruby on Rails, ReactJS, HTML5, CSS Modules. Subnote is a note taking webapp, designed to allow any user to create their own personal notes digitally with live updating.",
    link: "https://github.com/anthonythenguyen/Subnote",
  },
  {
    title: "Chatroom App",
    image1: Android1,
    image2: Android2,
    description:
      "Using Firestore/Firebase and Kotlin/Java in Android Studio. This is an android application created to allow users to be able to message other users with real-time updates.",
    link: "https://github.com/anthonythenguyen/The-Chatroom-App",
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
        <ProjectTabContainer>
          <ProjectTab>Projects</ProjectTab>
        </ProjectTabContainer>
        <Projects projectsInfo={list}></Projects>
      </Background>
    </ThemeProvider>
  );
}

export default App;
