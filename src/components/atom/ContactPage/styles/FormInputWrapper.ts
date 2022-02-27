import styled from 'styled-components';
const FormInputWrapper = styled.div`
    align-items:center;
    column-gap:1.5rem;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:3.5rem;
    max-width:95vw;
    width:55rem;
    & > label,
    & > input{
        color:${({theme}) => theme.colors.page.subTitle};
        font-family:${({theme}) => theme.fonts.family.secondary};
        height:3.5rem;
        transition:.12s linear color;
    }
    & > label{
        align-items:center;
        display:flex;
        font-size:1.75rem;
        font-weight:600;
        justify-content:center;
        text-align:center;
        width:15rem;
    }
    & > input{
        border-bottom:.15rem solid ${({theme}) => theme.colors.page.subTitle};
        font-size:1.65rem;
        font-weight:600;
        padding:0 1rem;
        text-align:center;
        transition:.12s linear border-bottom;
        width:40rem;
        &:focus,
        &:hover{
            border-bottom:.15rem solid ${({theme}) => theme.colors.page.buttons};
            color:${({theme}) => theme.colors.page.buttons};
        }
        &::selection{
            background-color:${({theme}) => theme.colors.page.buttons};
            color:${({theme}) => theme.colors.page.background};
        }
    }
`
export default FormInputWrapper;