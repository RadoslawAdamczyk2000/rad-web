import styled from 'styled-components';
const LinkPageWrapper = styled.a`
    align-items:center;
    background-color:${({theme}) => theme.colors.page.subTitle};
    border-radius:1.4rem;
    color:${({theme}) => theme.colors.page.background};
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-evenly;
    height:5rem;
    margin:1.5rem 0;
    transition:.12s linear background-color;
    width:20rem;
    & > span:first-of-type{
        align-items:center;
        display:flex;
        font-size:3rem;
        justify-content:center;
        height:4rem;
        width:4rem;
    }
    & > span:last-of-type{
        font-size:2rem;
        font-weight:800;
    }
    &:focus,
    &:hover{
        background-color:${({theme}) => theme.colors.page.title};
    }
`
export default LinkPageWrapper;