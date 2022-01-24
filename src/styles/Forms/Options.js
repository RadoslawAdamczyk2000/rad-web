import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    align-items:flex-start;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    margin:auto;
    max-width:75%;
    width:35rem;

    & > label{
        border: .25rem solid  ${({theme}) => theme.colors.page.buttons};
        border-radius:1.5rem;
        color:${({theme}) => theme.colors.page.buttons};
        font-family:${({theme}) => theme.fonts.family.secondary};
        font-size:1.65rem;
        margin:.75rem auto;
        padding:.5rem 1rem;
        transition: .12s linear border, .12s linear color;
    }

    & > select{
        background:none;
        border:none;
        border-bottom: .25rem solid ${({theme}) => theme.colors.page.title};
        color:${({theme}) => theme.colors.page.title};
        cursor:pointer;
        height:3rem;
        margin:.75rem 0;
        outline:none;
        text-align:center;
        transition: .12s linear border-bottom, .12s linear color;
        width:100%;

        &:focus,
        &:hover{
            border-bottom: .25rem solid ${({theme}) => theme.colors.page.buttons};
            color:${({theme}) => theme.colors.page.special};
        }

        &:hover > option{
            background-color:${({theme}) => theme.colors.page.background} !important;
            color:${({theme}) => theme.colors.page.buttons} !important;
        }

        & > option{
            background-color:${({theme}) => theme.colors.page.background};
            border: .25rem solid ${({theme}) => theme.colors.page.title};
            outline:none;

           

        }
    }   
    
   

    
`

const Options = ({isWebsite, isSeo, isAnalytics}) => {
    return(
        <Wrapper>
            {
                isWebsite &&
                <>
                    <label htmlFor='www'>
                        Pakiet
                    </label>
                    <select id='www'>
                        <option value=''></option>
                        <option value='www mini' name='www mini'>WWW mini</option>
                        <option value='www standard' name='www standard'>WWW standard</option>
                        <option value='www pro' name='www pro'>WWW pro</option>
                    </select>
                </>
            }
            {
                isSeo &&
                <>
                    <label htmlFor='seo'>
                        Pakiet
                    </label>
                    <select id='seo'>
                        <option value=''></option>
                        <option value='seo mini' name='seo mini'>SEO mini</option>
                        <option value='seo standard' name='seo standard'>SEO standard</option>
                        <option value='sem' name='sem'>SEM</option>
                    </select>
                </>
            }
            {
                isAnalytics &&
                <>
                    <label htmlFor='analytics'>
                        Pakiet
                    </label>
                    <select id='analytics'>
                        <option value=''></option>
                        <option value='analityka' name='analityka'>Analityka</option>
                    </select>
                </>
            }
        </Wrapper>
    )
}

export default Options;