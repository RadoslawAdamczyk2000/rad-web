import { motion } from 'framer-motion';
import styled from 'styled-components';

const HobbyItemWrapper = styled(motion.div)`
    align-items:center;
    border-bottom-right-radius:2rem;
    border-top-left-radius:2rem;
    color:${({theme}) => theme.colors.page.title};
    display:flex;
    flex-direction:column;
    height:12rem;
    justify-content:space-evenly;
    transition:.12s linear background-color, .12s linear color;
    width:12rem;

    &:hover{
        background-color:${({theme}) => theme.colors.page.background};
        color:${({theme}) => theme.colors.page.buttons};
    }

    & > span{
        font-size:5rem;
    }

    & > p{
        font-style:${({theme}) => theme.fonts.family.secondary};
        font-size:${({theme}) => theme.fonts.size.page.regular};
    }
`

export default HobbyItemWrapper;