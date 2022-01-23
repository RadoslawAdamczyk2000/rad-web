import React from 'react';
import styled from 'styled-components';
import {AiOutlineLink} from 'react-icons/ai';

const Wrapper = styled.div`
    align-items:center;
    display:flex;
    height:15rem;
    justify-content:flex-start;
    width:100%;

    & > a{
        align-items:center;
        color:${({theme}) => theme.colors.article.subTitle};
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        justify-content:center;
        overflow:hidden;
        position:relative;
        width:auto;

        &:hover{
            color:${({theme}) => theme.colors.article.link};
        }

        &::after{
            background-color:${({theme}) => theme.colors.article.link};
            border-radius:1rem;
            bottom:0rem;
            height:.5rem;
            left:-100%;
            transition:.15s linear transform;
            width:100%;
        }

        &:hover::after{
            transform:translateX(100%);
        }

        & > span:first-of-type{
            font-size:2.7rem;
            height:4.5rem;
        }

        & > span:last-of-type{
            align-items:center;
            display:flex;
            font-size:3.5rem;
            height:4.5rem;
            justify-content:center;
            width:4.5rem;
        }
    }
`

const ButtonProject = ({path}) => {
    return(
        <Wrapper>
            <a href={path} rel='noopener noreferrer' target='_blank'>
                <span>
                    Zobacz
                </span>
                <span>
                    <AiOutlineLink/>
                </span>
            </a>
        </Wrapper>
    )
}

export default ButtonProject;