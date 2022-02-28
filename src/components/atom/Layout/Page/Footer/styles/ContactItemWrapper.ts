import styled from 'styled-components';
const ContactItemWrapper = styled.li`
    align-items:center;
    color:${({theme}) => theme.colors.article.text};
    display:flex;
    font-size:1.75rem;
    justify-content:center;
    margin:.75rem auto;
    transition:.12s linear color;
    width:100%;
    & > p{
        cursor:default;
    }
    & > a:hover{
        color:${({isLink, theme}) => isLink ? theme.colors.page.buttons :  theme.colors.article.link};
    }
`
export default ContactItemWrapper;