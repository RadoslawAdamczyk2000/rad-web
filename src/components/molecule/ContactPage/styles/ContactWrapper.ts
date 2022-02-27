import styled from 'styled-components';
const ContactWrapper = styled.div`
    background-color:${({theme}) => theme.colors.page.title};
    border-bottom-right-radius:2rem;
    border-top-left-radius:2rem;
    color:${({theme}) => theme.colors.page.background};
    display:grid;
    grid-template-columns:repeat(2,1fr);
    margin:8rem auto;
    max-width:85vw;
    min-height:25rem;
    width:85rem;
    @media only screen and (max-width:850px){
        display:flex;
        flex-direction:column-reverse;
        justify-content:center;
    }
`
export default ContactWrapper;