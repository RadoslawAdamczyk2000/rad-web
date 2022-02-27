import styled from 'styled-components';
const ContactItemWrapper = styled.a`
    align-items:center;
    color:${({theme}) => theme.colors.page.background};
    column-gap:2rem;
    display:flex;
    flex-direction:row;
    font-size:1.75rem;
    font-weight:700;
    justify-content:center;
    transition:.12s linear color;
    &:focus,
    &:hover{
        color:${({theme}) => theme.colors.page.buttons};
    }
`
export default ContactItemWrapper;