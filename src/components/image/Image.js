import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const PopOutImg = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 90vw;
  height: 90vh;
  position: fixed;
  top: 5vh;
  left: 5vw;
`;

const PopOutImgContainer = styled.div`
  background-color: #111d;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
`;

const ProjectImage = styled.img`
  width: 600px;
  height: 300px;
`;

function Image(props) {
  const [popOut, setPopOut] = useState(false);
  return (
    <>
      <ProjectImage
        src={props.src}
        onClick={() => {
          setPopOut(true);
        }}
      ></ProjectImage>
      {popOut && (
        <PopOutImgContainer
          onClick={() => {
            setPopOut(false);
          }}
        >
          <PopOutImg src={props.src}></PopOutImg>
        </PopOutImgContainer>
      )}
    </>
  );
}

Image.propTypes = {};

export default Image;