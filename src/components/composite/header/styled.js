import styled from 'styled-components'
import media from '../../../util/responsive/index'

export const Menu = styled.div`
    width:100%;
    height:50px;
    background-color:black;
    position:relative;
    padding:10px 15px;
    top:0;
    ${media.sm`

    `}
`;
export const Link = styled.a`
    font-size: 20px;
    font-weight: 900;
    font-family: "Pacifico", cursive;
    color: white;
    
    ${media.sm`
    font-size: 15px;
`}
`;