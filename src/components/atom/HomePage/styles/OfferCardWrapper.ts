import styled from 'styled-components';
const OfferCardWrapper = styled.article`
    flex-shrink:0;
    width:25rem;
    & > .content,
    & > .head{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    & > .head{
        background-color:${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.title};
        height:12rem;
        row-gap:1.5rem;
        & > span{
            font-size:3rem;
        }
        & > h5{
            font-size:1.75rem;
        }
    }
    & > .content{
        border-bottom:.2rem solid ${({theme}) => theme.colors.page.buttons};
        border-left:.2rem solid ${({theme}) => theme.colors.page.buttons};
        border-right:.2rem solid ${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.subTitle};
        font-size:1.55rem;
        height:25rem;
        row-gap:2rem;
        padding:.25rem;
        text-align:center;
    }
`
export default OfferCardWrapper;