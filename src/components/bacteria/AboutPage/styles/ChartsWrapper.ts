import styled from 'styled-components';
const ChartsWrapper = styled.section`
    /* background-color:${({theme}) => theme.colors.page.subTitle}; */
    border-radius:1.5rem;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    & > * {
        /* background-color:${({theme}) => theme.colors.page.subTitle}; */
        margin:auto;
        width:100%;
    }
    @media only screen and (max-width:1100px){
        grid-template-columns:repeat(2,1fr);
        & > *:first-of-type{
            grid-column:1/-1;
        }
    }
    @media only screen and (max-width:800px){
        grid-template-columns:repeat(1,1fr);
    }
`
export default ChartsWrapper;
