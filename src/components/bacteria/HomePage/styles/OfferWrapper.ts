import styled from 'styled-components';
const OfferWrapper = styled.section`
    padding:.35rem 0;
    & > .head{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin:auto;
        padding:.85rem .25rem;
        width:85%;
    }
    & > .cards{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:1.75rem;
        justify-content:center;
    }
`
export default OfferWrapper;