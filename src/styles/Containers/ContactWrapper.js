import styled from 'styled-components';

const ContactWrapper = styled.div`
    display:grid;
    grid-column-gap:1rem;
    grid-row-gap:1rem;
    grid-template-columns:repeat(2,1fr);
    margin:5rem auto;
    max-width:85%;

    & > .item{
        align-items:center;
        display:flex;
        height:100%;
        justify-content:center;
        margin:auto;
        max-width:85vw;
        width:100%;
    }

    & > .item:last-of-type{
        grid-column:1/-1;
    }
    

    @media only screen and (max-width:1050px){
        align-items:center;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        grid-template-columns:repeat(1,1fr);
        justify-content:space-evenly;
        & > .item:last-of-type{
            grid-column:1;
        }
    }
`

export default ContactWrapper;