import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'gatsby';

const Wrapper = styled(motion(Link))`
    border: .25rem solid ${({theme}) => theme.colors.page.buttons};
    color:${({theme}) => theme.colors.page.buttons};
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.page.button};
    font-weight:${({theme}) => theme.fonts.weight.page.secondary};
    height:4rem;
    min-width:10rem;
    padding:1.5rem 2rem;
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