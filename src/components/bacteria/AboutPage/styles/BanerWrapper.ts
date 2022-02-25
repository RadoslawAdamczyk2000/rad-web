import styled from 'styled-components';
const BanerWrapper = styled.header`
    & > .head{
        display:grid;
        grid-template-columns:1fr 1fr;
        height:45rem;
        & > div:first-of-type{
            align-items:center;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        @media only screen and (max-width:800px){
            grid-template-columns:1fr;
            height:90rem;
        }
    }
`
export default BanerWrapper;