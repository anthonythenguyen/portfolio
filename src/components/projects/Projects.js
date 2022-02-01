import React, { useRef } from "react";
import styled from "styled-components";
import LeftArrow from "../../assets/images/LeftArrow.png";
import RightArrow from "../../assets/images/RightArrow.png";

import Image from "../image/Image";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #03254c;
  min-width: 70%;
  padding: 0;
  overflow-x: auto;
  gap: 15px;
  scroll-behavior: smooth;
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #9197ae;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;

  box-shadow: 5px 5px 15px #444;
  padding: 1rem 0;
  min-width: 100%;
`;
//flex-grow: 5; ^

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
`;

const LeftArrowContainer = styled.div`
  display: flex;
  justify-content: left;
`;

const RightArrowContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const ImageContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2em;
  padding: 0 1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const GridChild = styled.div`
  width: 100%;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  object-fit: cover;
`;

const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32pt;
`;

const ProjDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2vh;
  overflow-y: auto;
`;

export default function Projects(props) {
  const containerRef = useRef();
  return (
    <MainContainer>
      <LeftArrowContainer
        onClick={() => {
          containerRef.current.scrollLeft =
            containerRef.current.scrollLeft -
            containerRef.current.clientWidth -
            15;
        }}
      >
        <ImageContainer src={LeftArrow} />
      </LeftArrowContainer>

      <ProjectContainer ref={containerRef}>
        {props.projectsInfo.map((ele, index) => {
          return (
            <ProjectsDiv key={index}>
              <GridBox>
                <ImgDiv>
                  <Image src={ele.image1} />

                  <Image src={ele.image2} />
                </ImgDiv>
                <DescDiv>
                  <GridChild>
                    <Title>{ele.title}</Title>
                  </GridChild>
                  <ProjDescription>
                    <p>{ele.description}</p>
                  </ProjDescription>
                  <ProjDescription>
                    <a href={ele.link}>
                      <p>{ele.link}</p>
                    </a>
                  </ProjDescription>
                </DescDiv>
              </GridBox>
            </ProjectsDiv>
          );
        })}
      </ProjectContainer>

      <RightArrowContainer
        onClick={() => {
          containerRef.current.scrollLeft =
            containerRef.current.scrollLeft +
            containerRef.current.clientWidth +
            15;
        }}
      >
        <ImageContainer src={RightArrow} />
      </RightArrowContainer>
    </MainContainer>
  );
}
