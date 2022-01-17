import styled from 'styled-components';

const OfferSectionWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:10rem 0;

    & > .cards{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        grid-row-gap:2rem;
        margin:1.5rem 0;

        @media only screen{
            @media (max-width:1100px){
                grid-template-columns:repeat(2,1fr);
            }
            @media (max-width:800px){
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`

export default OfferSectionWrapper;