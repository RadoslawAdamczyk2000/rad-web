import styled from 'styled-components';

const SocialsBoxWrapper = styled.div`
    color:${({isArticle, theme}) => isArticle ?  theme.colors.article.text : theme.colors.article.background};
    padding:1rem .75rem;
    width:100%;

    & > ul{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
    }
`

export default SocialsBoxWrapper;