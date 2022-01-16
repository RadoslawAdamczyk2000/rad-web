import styled from 'styled-components';

const ArticleCardWrapper = styled.div`
    background-color:${({theme}) => theme.colors.page.card};
    height:32rem;
    margin:2rem 0;
    width:35rem;

    & > .head{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        justify-content:space-between;
        padding:.25rem .5rem;
        height:6rem;

        & > .head-item{
            align-items:center;
            display:flex;
            height:5rem;
            font-size:3rem;
            justify-content:center;
            width:5rem;
        }

        & > a{
            transition:.12s linear color;

            &:hover{
                color:${({theme}) => theme.colors.page.special};
            }
        }
    }

    & > .title{
        background:black;
        color:${({theme}) => theme.colors.page.title};
        font-size:${({theme}) => theme.fonts.size.page.content};
        margin:1rem 0;
    }
`

export default ArticleCardWrapper;