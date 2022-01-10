import React from "react";
import Background from "../../assets/images/background.jpeg";
import styled from "styled-components";

const Bio = styled.div`
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 3em 0;
`;

const Description = styled.div`
  display: flex;
  background-color: #eff6ee;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
  padding: 1rem;
  flex-grow: 1;
  max-width: 50%;
  box-shadow: 5px 5px 15px #444;
`;

const FlexDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function bio(props) {
  return (
    <Bio>
      <FlexDisplay>
        <Description>{props.children}</Description>
      </FlexDisplay>
    </Bio>
  );
}

bio.propTypes = {};

export default bio;
