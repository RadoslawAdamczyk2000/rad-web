import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.h2`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.subTitle};
    font-weight:${({theme}) => theme.fonts.weight.page.subTitle};

    ${({isArticle}) => isArticle && css`
        color:${({theme}) => theme.colors.article.subTitle};
        font-size:${({theme}) => theme.fonts.size.article.subTitle};
        font-weight:${({theme}) => theme.fonts.weight.article.subTitle};
    
    `}
`

const TitleSection = ({children, isArticle}) => {
    return(
        <>
            {
                isArticle ?
                <Wrapper isArticle>
                    {children}
                </Wrapper> :
                <Wrapper>
                    {children}
                </Wrapper>
            }
        </>
    )
}

export default TitleSection;