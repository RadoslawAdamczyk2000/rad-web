import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inter:wght@400;500;700;900&display=swap');

    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }

    ::after,
    ::before{
        content:'';
        position:absolute;
    }

    a{
        color:inherit;
        cursor:pointer;
        text-decoration:none;
    }

    body{
        background-color:${({isArticle, theme}) => isArticle ? theme.colors.article.background : theme.colors.page.background };
        color:${({isArticle, theme}) => isArticle ? theme.colors.article.text : theme.colors.page.subTitle};
        font-size:1.6rem;
    }

    button{
        background:none;
        border:none;
        cursor:pointer;
        outline:none;
    }

    html{
        font-family:${({theme}) => theme.fonts.family.primary};
        font-size:62.5%;
    }

    li,
    ol,
    ul{
        list-style:none;
    }
`

export default Global;