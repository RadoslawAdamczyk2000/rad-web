import styled from 'styled-components';
const LinkButtonWrapper = styled.li`
    position:relative;
    overflow:hidden;
    width:15rem;
    & > a{
        align-items:center;
        color:${({theme}) => theme.colors.page.buttons};
        display:flex;
        font-size:2.5rem;
        font-weight:900;
        justify-content:center;
        transition:.12s linear filter;
    }
    &:hover > a{
        filter:brightness(115%);
    }
    &::before{
        background-color:${({theme}) => theme.colors.page.buttons};
        bottom:0;
        height:.35rem;
        left:-110%;
        transition:.12s linear transform;
        width:100%;
    }
    &:hover::before{
        transform:translateX(110%);
    }
`
export default LinkButtonWrapper;