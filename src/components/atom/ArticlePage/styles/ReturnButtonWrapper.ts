import styled from 'styled-components';
const ReturnButtonWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:end;
    margin:1.5rem 0;
    padding-right:2rem;
    width:100%;
    & > a{
        color:${({theme}) => theme.colors.page.subTitle};
        font-size:2.5rem;
        font-weight:900;
        position:relative;
        transition:.12s linear color;
        &:hover {
            color:${({theme}) => theme.colors.page.title};
            &::before{
                width:100%;
            }
        }
        &::before{
            background-color:${({theme}) => theme.colors.page.title};
            bottom:-1rem;
            height:.75rem;
            right:0;
            transform:skewX(-25deg);
            transition:.12s linear width;
            width:0%;
        }
    }
    @media only screen and (max-width:950px){
        justify-content:center;
        padding-right:0;
    }
`
export default ReturnButtonWrapper;