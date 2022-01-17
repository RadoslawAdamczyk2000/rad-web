import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Wrapper = styled(Link)`
    align-items:center;
    border: .25rem solid ${({theme}) => theme.colors.page.buttons};
    color:${({theme}) => theme.colors.page.buttons};
    display:flex;
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.page.button};
    font-weight:${({theme}) => theme.fonts.weight.page.secondary};
    height:5rem;
    justify-content:center;
    padding:.5rem 1.5rem;
    min-width:10rem;
    position:relative;
    transition: .12s linear filter;

    &:hover{
        filter:brightness(120%);
    }
`

const ButtonPage = ({children, path}) => {
    return(
        <Wrapper 
            to={path}
            whileTap={{
                scaleX:.75
            }}
        >
            {children}
        </Wrapper>
    )
}

export default ButtonPage;