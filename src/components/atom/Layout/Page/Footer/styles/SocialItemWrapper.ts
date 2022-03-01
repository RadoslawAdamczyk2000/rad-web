import styled from 'styled-components';
const SocialItemWrapper = styled.li`
    align-items:center;
    cursor:pointer;
    display:flex;
    flex-shrink:0;
    height:7rem;
    justify-content:center;
    position:relative;
    transition:.5s;
    width:7rem;
    &::after{
        background-color:${({theme}) => theme.colors.page.background};
        inset:0;
        transform:rotate(45deg);
    }
    &::before{
        box-shadow: 0 0 0 1rem ${({color}) => color},0 0 0 2rem ${({theme}) => theme.colors.page.background},0 0 0 2.1rem ${({color}) => color};
        inset:2rem;
        transition:.5s;
    }
    &:hover::before{
        inset:0;
    }
    &:hover {
        transform:scale(.85);
        z-index:1000;
    }
    & > a{
        align-items:center;
        color:${({color}) => color};
        display:flex;
        font-size:4rem;
        height:100%;
        justify-content:center;
        position:relative;
        transition:.5s,.12s linear filter,.12s linear font-size;
        width:100%;
        z-index:10;
    }
    &:hover > a{
        font-size:3rem;
        filter:drop-shadow(0 0 2rem ${({color}) => color}) drop-shadow(0 0 4rem ${({color}) => color}) drop-shadow(0 0 6rem ${({color}) => color});
    }
    @media only screen and (max-width:950px){
        &,
        &::before{
            transform:scale(.75);
        }
        &::after{
         transform:rotate(45deg) scale(.75);
        }
        &:hover {
            transform:scale(.85);
        }
    }
`
export default SocialItemWrapper;