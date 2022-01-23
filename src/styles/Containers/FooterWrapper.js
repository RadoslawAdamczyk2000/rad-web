import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color:${({isArticle, theme}) =>  isArticle ? theme.colors.article.text : theme.colors.article.background};
    color:${({isArticle, theme}) =>  isArticle ? theme.colors.article.background : theme.colors.article.text};
    margin-top:15rem;
    padding:1.5rem .75rem;

    & > .box{
        display:grid;
        grid-template-columns:3fr 2fr;
       
        @media only screen and (max-width:800px){
            grid-template-columns:1fr;
        }
    }
`

export default FooterWrapper;