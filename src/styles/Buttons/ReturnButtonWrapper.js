import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    align-items:center;
    display:flex;
    justify-content:end;
    height:8rem;
    margin-top:8rem;
`

const Wrapper = styled(Link)`
    align-items:center;
    color:${({theme}) => theme.colors.article.text};
    display:flex;
    flex-direction:row;
    flex-shrink:0;
    flex-wrap:nowrap;
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.article.subTitle};
    font-weight:${({theme}) => theme.fonts.weight.article.secondary};
    overflow-x:hidden;
    transition: .12s linear color;
    width:15rem;

    &:hover{
        color:${({theme}) => theme.colors.article.subTitle};
    }

    & > span:nth-of-type(1){
        align-items:center;
        display:flex;
        flex-shrink:0;
        height:3.5rem;
        justify-content:center;
        padding:.25rem 1.5rem;
        transition: .12s linear width;
        width:15rem;
    }

    & > span:nth-of-type(2){
        align-items:center;
        display:flex;
        flex-shrink:0;
        height:3.5rem;
        justify-content:center;
        transition: .12s linear width;
        width:3.5rem;
        /* width:0rem; */
    }
    &:hover > span:nth-of-type(1){
        width:calc(15rem - 3.5rem);
    }

    &:hover > span:nth-of-type(2){
        width:3.5rem;
    }
`

const ButtonReturn = ({path}) => {
    return(
        <Box>
            <Wrapper to={path}>
                <span>
                    wróć
                </span>
                <span>
                    <FiArrowLeft/>
                </span>
            </Wrapper>
        </Box>
    )
}

export default ButtonReturn;