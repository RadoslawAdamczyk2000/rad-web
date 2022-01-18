import styled from 'styled-components';

const TextExcerptArticle = styled.strong`
    font-size:${({theme}) => theme.fonts.size.article.excerpt};
    font-weight:${({theme}) => theme.fonts.weight.article.excerpt};
    text-align:justify;
`

export default TextExcerptArticle;