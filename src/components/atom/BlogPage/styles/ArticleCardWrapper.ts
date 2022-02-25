import styled from 'styled-components';
const ArticleCardWrapper = styled.article`
    background-color:${({theme}) => theme.colors.page.card};
    flex-shrink:0;
    height:20rem;
    width:30rem;
   
    & > .head{
        align-items:center;
        background-color:${({theme}) => theme.colors.page.title};
        display:flex;
        height:3.5rem;
        justify-content:space-between;
        padding:0 .8rem;
        & > a,
        & > span{
            align-items:center;
            color:${({theme}) => theme.colors.page.background};
            display:flex;
            font-size:2.2rem;
            height:3.2rem;
            justify-content:center;
            width:3.2rem;
        }
        & > a{
            transition:.12s linear color;
            &:hover{
                color:${({theme}) => theme.colors.page.buttons};
            }
        }
    }
    & > .content{
        & > a{
            color:${({theme}) => theme.colors.page.title};
            transition:.12s linear color;
            & > p{
                font-size:1.65rem;
                font-weight:600;
                text-align:center;
                padding:.75rem 1.2rem;
            }
            &:hover{
                color:${({theme}) => theme.colors.page.buttons};
            }
        }

        & > p{
            font-size:1.75rem;
            padding:.3rem 2rem;
            text-align:start;
        }
    }
`
export default ArticleCardWrapper;