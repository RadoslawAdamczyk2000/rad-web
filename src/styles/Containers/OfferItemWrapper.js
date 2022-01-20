import styled from 'styled-components';

const OfferItemWrapper = styled.div`
    background-color:${({theme}) => theme.colors.page.card};
    margin:2rem;
    padding-bottom:.75rem;
    width:35rem;

    & > .poster{
        align-items:center;
        display:flex;
        height:20rem;
        justify-content:center;
        width:100%;

        & > img{
            height:100%;
            object-fit:cover;
            object-position:center;
            width:100%;
        }
    }

    & > .content{
        padding:1rem 0 1rem;
        text-align:center;

        & > *{
            align-items:center;
            display:flex;
            justify-content:center;
            margin:.5rem auto;

        }

        & > .content__title{
            color:${({theme}) => theme.colors.page.special};
            font-size:${({theme}) => theme.fonts.size.page.content};
        }

        & > .content__text{
            font-size:${({theme}) => theme.fonts.size.page.content};
            width:95%;
        }

        & > .content__price{
            color:${({theme}) => theme.colors.page.title};
            margin:.5rem auto;
        }

    }

    & > .button{
        align-items:center;
        display:flex;
        justify-content:center;
        margin:.5rem 0;
    }

`

export default OfferItemWrapper;