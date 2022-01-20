import styled from 'styled-components';

const GlossaryItemWrapper = styled.div`
    background-color:${({theme}) => theme.colors.page.background};
    flex-shrink:0;
    font-family:${({theme}) => theme.fonts.family.secondary};
    margin:.5rem;
    max-width:35rem;

    & > .head{
        align-items:center;
        background-color:${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.background};
        display:flex;
        font-size:${({theme}) => theme.fonts.size.article.title.mobile};
        font-weight:${({theme}) => theme.fonts.weight.page.regular};
        justify-content:start;
        padding:.5rem 0 .75rem 1.5rem;
    }

    & > .content{
        background-color:${({theme}) => theme.colors.page.background};
        border:.25rem solid ${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.buttons};       
        font-size:${({theme}) => theme.fonts.size.page.content};
        font-weight:${({theme}) => theme.fonts.weight.page.secondary};
        padding:1.5rem 1.75rem;
        text-align:start;
    }

`

export default GlossaryItemWrapper;