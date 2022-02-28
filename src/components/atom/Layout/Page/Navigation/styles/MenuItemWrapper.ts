import styled from 'styled-components';
import {Link} from 'gatsby';
const MenuItemWrapper = styled(Link)`
    color:${({theme}) => theme.colors.page.navigation.mobile.color};
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.page.button};
    font-weight:${({theme}) => theme.fonts.weight.page.secondary};
    position:relative;
    transition:.12s linear color;
    &::before{
        background-color:${({theme}) => theme.colors.page.navigation.mobile.color};
        bottom:-.15rem;
        left:0;
        height:.2rem;
        width:100%;
    }
    &:hover{
        color:${({theme}) => theme.colors.page.buttons};
    }
    &:hover::before{
        background-color:${({theme}) => theme.colors.page.buttons};
    }
`
export default MenuItemWrapper;