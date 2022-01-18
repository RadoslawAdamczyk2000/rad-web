import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    margin:0 auto 5rem;
    max-height:auto;
    min-height:80rem;
    width:${({isArticle}) => isArticle ? '70vw' : '75vw'};

    @media only screen and (max-width:700px){
        width:${({isArticle}) => isArticle ? '80vw' : '85vw'};
    }
`

const Wrapper = ({children, isArticle}) => {
    return(
        <Box isArticle={isArticle}>
            {children}
        </Box>
    )
}

export default Wrapper;