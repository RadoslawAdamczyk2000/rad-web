import styled from 'styled-components';
const Sections = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    margin:4rem auto;
    max-width:95vw;
    & > section{
        border:.3rem solid ${({theme}) => theme.colors.page.buttons};
        margin:auto;
        max-width:75vw;
        transition:.12s ease-in-out box-shadow;
        width:50rem;
        &:hover{
            box-shadow:0 0 2rem .5rem ${({theme}) => theme.colors.page.buttons};
        }
        & > div:last-of-type{
            font-size:1.6rem;
        }
    }
    & > section:nth-child(even){
        grid-column:1;
    }
    & > section:nth-child(odd){
        grid-column:2;
    }
    @media only screen and (max-width:1150px){
        grid-template-columns:repeat(1,1fr);
        row-gap:2rem;
        & > section:nth-child(even),
        & > section:nth-child(odd){
            grid-column:1;
        }
    }
`
export default Sections;