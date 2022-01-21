import styled from 'styled-components';

const InfoContactWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:start;
    width:100%;

    & > .box{
        align-items:flex-start;
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;

        & > .item{
            align-items:center;
            color:${({theme}) => theme.colors.page.title};
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            font-size:1.9rem;
            margin:1rem auto;
            transition:.12s linear color;
            width:100%;

            &:hover{
                color:${({theme}) => theme.colors.page.special};
            }

            & > span:first-of-type{
                align-items:center;
                display:flex;
                font-size:${({theme}) => theme.fonts.size.article.title.desktop};
                height:5rem;
                justify-content:center;
                width:5rem;
            }

            & > span:last-of-type{
                padding:.5rem 1rem;

            }
        }
    }
`

export default InfoContactWrapper;