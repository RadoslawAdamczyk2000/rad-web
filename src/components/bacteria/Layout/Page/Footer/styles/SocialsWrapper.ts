import styled from 'styled-components';
const SocialsWrapper = styled.div`
    margin:.5rem auto;
    padding:1rem .75rem;
    width:75%;
    & > ul{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:1.8rem;
        justify-content:space-evenly;
    }
`
export default SocialsWrapper;