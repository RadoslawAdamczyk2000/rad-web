import styled from 'styled-components';
const FormAreaWrapper = styled.div`
    align-items:baseline;
    column-gap:1.5rem;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    max-width:95vw;
    min-height:3.5rem;
    width:55rem;
    & > label{
        align-items:center;
        color:${({theme}) => theme.colors.page.subTitle};
        display:flex;
        font-family:${({theme}) => theme.fonts.family.secondary};
        font-size:1.75rem;
        font-weight:600;
        height:3.5rem;
        justify-content:center;
        transition:.12s linear color;
        width:15rem;
    }
    & > textarea{
        border:.15rem solid ${({theme}) => theme.colors.page.subTitle};
        color:${({theme}) => theme.colors.page.subTitle};
        font-family:${({theme}) => theme.fonts.family.secondary};
        font-size:1.65rem;
        font-weight:600;
        height:12rem;
        padding:1rem;
        text-align:justify;
        transition:.12s linear border-bottom;
        width:40rem;
        &:focus,
        &:hover{
            border:.15rem solid ${({theme}) => theme.colors.page.buttons};
            color:${({theme}) => theme.colors.page.buttons};
        }
        &::selection{
            background-color:${({theme}) => theme.colors.page.buttons};
            color:${({theme}) => theme.colors.page.background};
        }
    }
`
export default FormAreaWrapper;