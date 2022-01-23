import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.h2`
    color:${({isHeading, theme}) => isHeading ? theme.colors.page.title : theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.subTitle};
    font-weight:${({theme}) => theme.fonts.weight.page.subTitle};
    text-align:${({isCenter}) => isCenter ? 'center' : 'start'};
    margin:${({isHeading}) => isHeading && '2rem 0'};

    ${({isArticle}) => isArticle && css`
        color:${({theme}) => theme.colors.article.subTitle};
        font-size:${({theme}) => theme.fonts.size.article.subTitle};
        font-weight:${({theme}) => theme.fonts.weight.article.subTitle};
        margin:5rem 0;
    
    `}
`

const TitleSection = ({children, content, isArticle, isCenter, isHeading}) => {
    return(
        <>
            {
                isArticle ?
                <Wrapper isArticle isCenter={isCenter} isHeading={isHeading} dangerouslySetInnerHTML={{__html:content}}>
                    {children}
                </Wrapper> :
                <Wrapper isCenter={isCenter} isHeading={isHeading}>
                    {children}
                </Wrapper>
            }
        </>
    )
}

export default TitleSection;