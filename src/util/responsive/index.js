import styled,{ css } from 'styled-components'

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



function getWidthString(span) {
  if (!span) return;
  let width = span / 12 * 90;
  return `width:${width}%;`;
}

export const Div = styled.div`

${({ xs }) => (xs ? getWidthString(xs) : "width:100%")};
@media only screen and (min-width:768px){
  ${({ sm }) => sm && getWidthString(sm)};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && getWidthString(md)};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg && getWidthString(lg)};
}
`;
