import styled from 'styled-components';

const AuthorWrapper = styled.div`
    align-items:center;
    color:${({isArticle, theme}) => isArticle ? theme.colors.article.background : theme.colors.article.color};
    display:flex;
    height:6rem;
    justify-content:center;
    width:100%;

    & > p{
        font-size:2.2rem;
        font-weight:700;
    }
`

export default AuthorWrapper;