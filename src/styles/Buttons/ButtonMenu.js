import { motion } from 'framer-motion';
import React from 'react';
import styled,{css} from 'styled-components';

const Wrapper = styled(motion.button)`
    align-items:center;
    display:none;
    flex-direction:column;
    height:3.75rem;
    justify-content:space-evenly;
    overflow:hidden;
    padding:.25rem;
    width:3.75rem;

    & > span{
        background-color:${({theme}) => theme.colors.page.buttons};
        border-radius:.5rem;
        height:.25rem;
        opacity:1;
        transition: .12s linear background-color, .12s .12s linear display, .12s linear left, .12s linear opacity, .12s linear top, .12s linear transform;
        width:100%;
    }

    ${({isActive}) => isActive && css`
        & > span:nth-of-type(odd){
            left:50%;
            top:50%;
        }   

        & > span:nth-of-type(1){
            transform:translate(-50%, -50%) rotate(-45deg);
        }   

        & > span:nth-of-type(2){
            display:none;
            opacity:0;
        }  

        & > span:nth-of-type(3){
            transform:translate(-50%, -50%) rotate(45deg);
        }   

        & > span:nth-of-type(){}   
    `}
`

const ButtonMenu = ({behave, isActive}) => {
    return(
        <Wrapper onClick={behave} isActive={isActive}>
            <span/>
            <span/>
            <span/>
        </Wrapper>
    )
}

export default ButtonMenu;