import styled from 'styled-components';
const FormButtonWrapper = styled.button`
    align-items:center;
    border:.2rem solid ${({theme}) => theme.colors.page.title};
    color:${({theme}) => theme.colors.page.title};
    display:flex;
    font-size:3rem;
    font-weight:800;
    height:5rem;
    justify-content:center;
    margin:2rem auto;
    transition:.12s linear border, .12s linear box-shadow, .12s linear color;
    width:18rem;
    &:focus,
    &:hover{
        border:.2rem solid ${({theme}) => theme.colors.page.buttons};
        box-shadow:0 0 2rem ${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.buttons};
    }
`
export default FormButtonWrapper;