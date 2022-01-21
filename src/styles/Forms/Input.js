import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    align-items:flex-start;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    margin:auto;
    position:relative;
    max-width:75%;
    width:35rem;

    & > label{
        border: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        border-radius:1.5rem;
        color:${({theme}) => theme.colors.page.buttons};
        font-family:${({theme}) => theme.fonts.family.secondary};
        font-size:1.65rem;
        margin:.75rem 0;
        padding:.5rem 1rem;
        transition: .12s linear border, .12s linear color;
    }
    
    & > input {
        color:${({theme}) => theme.colors.page.title};
        border-bottom: .25rem solid  ${({theme}) => theme.colors.page.title};
        font-size:1.75rem;
        height:3.2rem;
        margin:.75rem 0;
        padding:0 .8rem;
        transition: .12s linear border-bottom, .12s linear color;
        text-align:center;
        width:100%;

        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.page.special};
            border-bottom: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        }

        &:focus ~ label,
        &:hover ~ label,
        &:focus + label,
        &:hover + label{
            color:${({theme}) => theme.colors.page.special};
            border: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        }
    }

    
`

const Input = ({name, placeholder, title, type}) => {
    return(
        <Wrapper>
            <label htmlFor={name}>
                {title}
            </label>
            <input type={type} id={name} name={name} placeholder={placeholder}/>
        </Wrapper>
    )
}

export default Input;