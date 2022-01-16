import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    color:${({theme}) => theme.colors.page.title};
    font-size:${({theme}) => theme.fonts.size.page.title.desktop};
    font-weight:${({theme}) => theme.fonts.weight.page.title};

    @media only screen and (max-width:800px){
        font-size:${({theme}) => theme.fonts.size.page.title.mobile};
    }
`

const TitlePage = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default TitlePage;