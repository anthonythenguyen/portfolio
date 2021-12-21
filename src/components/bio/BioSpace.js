import React from 'react'
import PropTypes from 'prop-types'
import Background from '../../assets/images/background.jpeg'
import styled from 'styled-components'
import { findByLabelText } from '@testing-library/react';

const Bio = styled.div`
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    padding: 5em 0;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fbfbfb;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    padding: 1rem;
    flex-grow: 1;
    max-width: 66%;
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
                <Description>
                    <p>uwu</p>
                </Description>
            </FlexDisplay>
        </Bio>
    )
}

bio.propTypes = {

}

export default bio

