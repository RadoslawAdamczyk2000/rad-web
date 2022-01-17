import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    color:${({isArticle, theme}) => isArticle ? theme.colors.article.text : theme.colors.page.subTitle};
    font-size:${({isArticle, theme}) => isArticle ? theme.fonts.size.article.content : theme.fonts.size.page.content};
    font-weight:${({isArticle, theme}) => isArticle ? theme.fonts.weight.article.regular : theme.fonts.weight.page.regular};
    text-align:${({isCenter}) => isCenter ? 'center' : 'start'};

    & > a{
        color:${({theme}) => theme.colors.page.special};
        text-decoration: underline wavy;
    }

    & > b{
        color:${({theme}) => theme.colors.page.title};
    }

    & > i{
        font-style:italic;
    }
`

const Text = ({children, isArticle, isCenter}) => {
    return(
        <Wrapper isArticle={isArticle} isCenter={isCenter}>
            {children}
        </Wrapper>
    )
}

export default Text;