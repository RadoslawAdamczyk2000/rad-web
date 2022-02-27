import styled from 'styled-components';
const OfferWrapper = styled.section`
    background-color:red;
    & > .cards{
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        gap:.75rem;
        justify-content:center;
    }
`
export default OfferWrapper;