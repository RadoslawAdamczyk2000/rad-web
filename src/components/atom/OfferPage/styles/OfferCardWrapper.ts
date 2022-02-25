import styled from 'styled-components';
const OfferCardWrapper = styled.article`
    background-color:${({theme}) => theme.colors.page.card};
    width:35rem;
    & > figure{
        height:18rem;
        overflow:hidden;
        width:35rem;
    }
    & > div{
        height:20rem;
        & > a{
            transition:.12s linear color;
            &:hover{
                color:${({theme}) => theme.colors.page.buttons};
            }
        }
        & > a:first-of-type{
            color:${({theme}) => theme.colors.page.title};
            & > h4{
                align-items:center;
                display:flex;
                font-size:1.95rem;
                justify-content:center;
                margin:1.25rem 0 .25rem 0;
                text-align:center;
            }
        }
        & > p{
            text-align:justify;
            padding:.25rem .75rem;
        }
        & > strong{
            align-items:center;
            display:flex;
            font-size:1.78rem;
            justify-content:center;
            text-align:center;
        }
        & > a:last-of-type{
            align-items:center;
            display:flex;
            font-size:1.8rem;
            font-weight:900;
            justify-content:center;
            margin:1.5rem auto;
            text-align:center;
        }
    }
`
export default OfferCardWrapper;