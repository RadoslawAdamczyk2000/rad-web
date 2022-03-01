import React from 'react';
import styled from 'styled-components';
const Box = styled.div`
    margin:0 auto 5rem;
    max-height:auto;
    min-height:80rem;
    width:75vw;

    @media only screen and (max-width:700px){
        width:85vw;
    }
`
const Wrapper = ({children}) => {
    return(
        <Box>
            {children}
        </Box>
    )
}
export default Wrapper;