import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Head = styled.h1`
  margin: 0;
`;

const HeadDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.light};
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  overflow-x: hidden;
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
