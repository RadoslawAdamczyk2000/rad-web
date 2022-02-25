import styled from 'styled-components';
const LinkButtonWrapper = styled.li`
    position:relative;
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
        filter:brightness(150%);
    }
    &::before{
        background-color:${({theme}) => theme.colors.page.buttons};
        bottom:-.85rem;
        height:.35rem;
        left:0;
        transition:.12s linear width;
        width:0;
    }
    &:hover::before{
        width:100%;
    }
`
export default LinkButtonWrapper;