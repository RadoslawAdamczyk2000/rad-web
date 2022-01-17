import styled from 'styled-components';

const OfferSectionWrapper = styled.div`
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

    & > .content{
        & > h2{
            color:${({theme}) => theme.colors.page.title};
            margin:2.5rem 0;
        }
    }

`

export default OfferSectionWrapper;