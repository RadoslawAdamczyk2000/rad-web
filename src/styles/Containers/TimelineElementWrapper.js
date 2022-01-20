import styled from 'styled-components';

const TimelineElementWrapper = styled.div`
    background-color:${({theme}) => theme.colors.article.background};
    border-bottom-right-radius:2.5rem;
    border-top-left-radius:2.5rem;
    color:${({theme}) => theme.colors.page.text};
    font-family:${({theme}) => theme.fonts.family.secondary};
    margin:2rem auto;
    max-width:95%;
    min-height:15rem;
    width:35rem;

    & > .head{
        align-items:center;
        background-color:${({color}) => color};
        border-top-left-radius:2.5rem;
        display:flex;
        height:6rem;
        justify-content:center;
        position:relative;

        & > .head__date{
            color:${({theme}) => theme.colors.article.background};
            font-size:${({theme}) => theme.fonts.size.page.content};
            font-weight:${({theme}) => theme.fonts.weight.page.subTitle};
        }

        & > .head__icon{
            align-items:center;
            background-color:${({theme}) => theme.colors.article.background};
            border-radius:50%;
            color:${({color}) => color};
            font-size:4rem;
            height:6rem;
            display:flex;
            justify-content:center;
            right:-2rem;
            position:absolute;
            top:-2rem;
            width:6rem;


            @media only screen and (max-width:900px){
                display:none;
            }
        }
    }

    & > .content{
        padding-bottom:2rem;

        & > .content__title{
            color:${({theme}) => theme.colors.page.background};
            font-size:${({theme}) => theme.fonts.size.page.content};
            font-weight:${({theme}) => theme.fonts.weight.page.subTitle};
            padding:1rem;
            text-align:center;
        }

        & > .content__text{
            color:${({theme}) => theme.colors.article.subTitle};
            font-size:${({theme}) => theme.fonts.size.page.content};
            font-weight:${({theme}) => theme.fonts.weight.page.secondary};
            margin:.75rem auto;
            opacity:.8;
            text-align:justify;
            width:85%;
        }
    }

`

export default TimelineElementWrapper;