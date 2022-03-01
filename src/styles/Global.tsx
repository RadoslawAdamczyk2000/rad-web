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
        background-color:${({theme}) => theme.colors.page.background };
        color:${({theme}) => theme.colors.page.subTitle};
        font-size:1.6rem;
    }
    button{
        cursor:pointer;
    }
    iframe{
        border:none;
        outline:none;
    }
    html{
        font-family:${({theme}) => theme.fonts.family.primary};
        font-size:62.5%;
    }
    button,
    input,
    textarea{
        background:none;
        border:none;
        font-family:${({theme}) => theme.fonts.family.primary};
        outline:none;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`
export default Global;