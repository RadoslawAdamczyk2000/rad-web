import styled from 'styled-components';
const HeroWrapper = styled.header`
    display:grid;
    grid-template-columns:1.5fr 2fr;
    height:75rem;
    & > div{
        align-items:start;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:.25rem;
    }
`
export default HeroWrapper;