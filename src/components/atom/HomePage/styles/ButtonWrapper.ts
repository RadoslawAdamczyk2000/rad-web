import styled, { css } from 'styled-components';
const ButtonWrapper = styled.div`
    align-items:center;
    display:flex;
    font-family:${({theme}) => theme.fonts.family.secondary};
    justify-content:${({isCenter}) => isCenter ? 'center' : 'start'};
    width:100%;
    & > a{
        border:.25rem solid ${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.buttons};
        font-size:2.2rem;
        min-height:3.25rem;
        padding:1.1rem 1.75rem;
        text-transform:lowercase;
        transition:.12s linear filter;
        &:focus,
        &:hover{
            filter:brightness(150%);
        }
        ${({isSmall}) => isSmall && css`
            font-size:1.55rem;
            padding:.5rem .75rem;
        `}
    }
`
export default ButtonWrapper;