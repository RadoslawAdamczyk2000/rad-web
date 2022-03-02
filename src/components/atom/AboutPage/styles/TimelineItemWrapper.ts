import styled from 'styled-components';
const TimelineItemWrapper = styled.div`
    background-color:${({theme}) => theme.colors.page.subTitle};
    color:${({theme}) => theme.colors.page.background};
    height:28rem;
    max-width:85vw;
    width:35rem;
    transition:.12s linear background-color,.12s linear box-shadow,.12s linear transform;
    & > .head{
        align-items:center;
        background-color:${({color}) => color};
        color:${({theme}) => theme.colors.page.title};
        display:flex;
        height:4rem;
        justify-content:space-around;
        transition:.12s linear filter;
        & > .icon{
            align-items:center;
            display:flex;
            font-size:3.2rem;
            height:3.75rem;
            justify-content:center;
            width:3.75rem;
        }
    }
    &:hover {
        background-color:${({theme}) => theme.colors.page.title};
        box-shadow:0 0 1rem hsla(0,100%,0%,.5),0 0 .5rem ${({color}) => color};
        transform:scale(1.1);
    }
    &:hover > .head{
        filter:brightness(130%);
    }
    & > .content{
        height: 100%;
        & > .title{
            align-items:center;
            display:flex;
            font-size:1.95rem;
            font-weight:600;
            justify-content:center;
            padding:.5rem;
            text-align:center;
        }
        & > .text{
            align-items:center;
            display:flex;
            font-size:1.65rem;
            justify-content:center;
            margin:.5rem auto;
            padding:.5rem .75rem;
            text-align:start;
        }
    }
`
export default TimelineItemWrapper;