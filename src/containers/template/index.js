import React, { Component } from 'react'
import Header from '../../components/composite/header/index'
import styled from 'styled-components'
import bgImage from '../../assets/image/bg.jpg'
import media from '../../util/responsive/index'
export class Template extends Component {
    render() {
        return (
            <HeaderContent>
                <Image>
                <Header />

                </Image>
            </HeaderContent>
        )
    }
}

const HeaderContent = styled.div`
/* background-color:yellow; */
padding: 1em;
width:100%;


    `;
 
const Image = styled.div`
height:600px;
background-image:${`url(${bgImage})`};
${media.iphone5`
width:320px;
`}
${media.xs`
 width:575px;
`}
${media.sm`
width:767px;
`}
${media.md`
width:991px;

`}
${media.lg`
width:1199px;

`}
${media.xl`
width:2800px;

`}
`;

