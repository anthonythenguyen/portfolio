import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Head = styled.h1`
  margin: 0;
`;
// background-color: ${(props) => props.theme.background};
//color: ${(props) => props.theme.foreground}
//background-color: #fefbea;
const HeadDiv = styled.div`
  display: flex;

  background-image: linear-gradient(
    to right,
    rgb(184, 135, 70),
    rgb(253, 245, 166)
  );
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  overflow-x: hidden;
  color: #191919;
`;

export default function Header(props) {
  const [timesClicked, setTimesClicked] = useState(1);

  return (
    <HeadDiv>
      {[...Array(timesClicked).keys()].map((ele) => (
        <Logo onClick={(e) => setTimesClicked((prev) => prev + 1)} />
      ))}
      <Head>{props.children}</Head>
    </HeadDiv>
  );
}
