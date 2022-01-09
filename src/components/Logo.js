import styled from "styled-components";

import icon from "../assets/images/icon.png";

const LogoDiv = styled.div``;

const LogoImg = styled.img`
    width: 5em;
    @media (max-width: 768px) {
        width: 5vw;
    }
`;

export default function Logo(props) {
    return (
        <LogoDiv {...props}>
            <LogoImg src={icon}></LogoImg>
        </LogoDiv>
    );
}
