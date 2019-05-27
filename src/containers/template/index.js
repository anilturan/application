import React, { Component } from 'react'
import Header from '../../components/composite/header/index'
import styled from 'styled-components'
import bgImage from '../../assets/image/bg.jpg'
import media from '../../util/responsive/index';
import { ConverterCard } from '../../components/UI/ConverterCard/index'
export class Template extends Component {
    render() {
        return (
            <HeaderContent>
                <ImageContent>
                    <HeaderMenu />
                    <Image src={bgImage} />
                    <ConverterCard sm={"4"} lg={"6"} > text</ConverterCard>
                    <ConverterCard sm={"4"} lg={"6"} > text</ConverterCard>
                    <ConverterCard sm={"4"} lg={"6"} > text</ConverterCard>
                    <ConverterCard sm={"4"} lg={"6"} > text</ConverterCard>

                </ImageContent>
            </HeaderContent>
        )
    }
}

const HeaderContent = styled.div`
/* background-color:yellow; */
/* padding: 1em; */
width:100%;


    `;

const Image = styled.img`
    width: 100%;
    min-height: 125px;
    /* border-top-right-radius: 20px;
    border-top-left-radius: 20px; */
    object-fit: cover;
    position:relative;
    max-height:600px;
 `;
const ImageContent = styled.div`
    height:600px;
    position:absolute;

`;

const HeaderMenu = styled(Header)`
    position:relative;
`;
