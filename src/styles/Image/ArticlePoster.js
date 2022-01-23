import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
    align-items:center;
    border-radius:2rem;
    box-shadow:-.5rem .25rem .5rem hsla(0,100%,0%,.15);
    display:flex;
    justify-content:center;
    height:65rem;
    left:10%;
    margin:5rem 0;
    overflow:hidden;
    position:relative;
    width:95%;

    & > img{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }


    @media only screen and (max-width:950px){
        height:45rem;
        left:0;
        margin:2rem auto;
        width:90%;
    }
`

const ArticlePoster = ({image}) => {
    return(
        <Wrapper>
            <img src={image} alt='article poster'/>
        </Wrapper>
    )
}

export default ArticlePoster;