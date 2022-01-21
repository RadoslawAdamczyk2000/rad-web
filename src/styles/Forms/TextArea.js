import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    align-items:flex-start;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    margin: 1rem  auto;
    max-width:85%;
    width:40rem;

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
    
    & > textarea {
        color:${({theme}) => theme.colors.page.title};
        border: .25rem solid  ${({theme}) => theme.colors.page.title};
        color:${({theme}) => theme.colors.page.title};
        font-size:1.75rem;
        height:12rem;
        padding:.45rem;
        transition: .12s linear border-bottom, .12s linear color;
        width:100%;

        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.page.special};
            border: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        }

        &:focus + label,
        &:hover + label{
            color:${({theme}) => theme.colors.page.special};
            border: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        }
    }

    
`

const TextArea = ({name, placeholder, title}) => {
    return(
        <Wrapper>
            <label htmlFor={name}>
                {title}
            </label>
            <textarea id={name} name={name} placeholder={placeholder}/>
        </Wrapper>
    )
}

export default TextArea;