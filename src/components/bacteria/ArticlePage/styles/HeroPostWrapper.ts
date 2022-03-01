import styled from 'styled-components';
const HeroPostWrapper = styled.header`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-height:75rem;
    row-gap:4rem;
    @media only screen and (max-width:950px){
        padding-top:3rem;
    }
`
export default HeroPostWrapper;