import styled from 'styled-components';

const WrapperMap = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    padding:5rem 0;
    width:100%;

    & > .box{
        align-items:center;
        background-color:${({theme}) => theme.colors.article.background};
        border-radius:2rem;
        height:38rem;
        padding:.75rem;
        position:relative;
        width:38rem;
        z-index:0;

        & > iframe{
            border:none;
            border-radius:2rem;
            height:100%;
            object-fit:cover;
            object-position:center;
            outline:none;
            width:100%;
        }
    }

    @media only screen and (min-width:950px){
        & > .box{

            &::before{
                background-color:${({theme}) => theme.colors.article.background};
                border-radius:2rem;
                height:100%;
                top:-3rem;
                right:-3rem;
                width:100%;
                z-index:-1;
            }
        }   
    }

`

export default WrapperMap;