import styled from 'styled-components';
const ContactItemWrapper = styled.li`
    align-items:center;
    color:${({theme}) => theme.colors.page.subTitle};
    display:flex;
    font-size:1.75rem;
    justify-content:center;
    margin:.75rem auto;
    transition:.12s linear color;
    width:100%;
    & > a:hover{
        color:${({theme}) => theme.colors.page.buttons};
    }
`
export default ContactItemWrapper;