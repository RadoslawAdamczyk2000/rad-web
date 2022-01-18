import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.h1`
    color:${({isArticle, theme}) => isArticle ? theme.colors.article.text : theme.colors.page.title};
    font-size:${({isArticle, theme}) => isArticle ? theme.fonts.size.article.title.desktop :theme.fonts.size.page.title.desktop};
    font-weight:${({isArticle, theme}) => isArticle ? theme.fonts.weight.article.title : theme.fonts.weight.page.title};

    ${({isArticle}) => isArticle && css`
        align-items:center;
        display:flex;
        justify-content:flex-start;
        min-height:40rem;
    `}

    @media only screen and (max-width:800px){
        font-size:${({theme}) => theme.fonts.size.page.title.mobile};
    }
`

const TitlePage = ({children, isArticle}) => {
    return(
        <Wrapper isArticle={isArticle}>
            {children}
        </Wrapper>
    )
}

export default TitlePage;