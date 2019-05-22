import { css } from 'styled-components'

export const sizes = {
    xl: 2800,
    lg: 1199,
    md: 991,
    sm: 767,
    xs: 575,
    iphone5: 320
}

const media = Object.keys(sizes).reduce((accumulator, label) => {
    
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
    @media(max-width: ${emSize}em){
        ${css(...args)};
    }
    `;

    return accumulator;

}, {});
export default media;