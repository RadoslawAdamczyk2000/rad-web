import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    color:${({theme}) => theme.colors.page.buttons};
    font-family:${({theme}) => theme.fonts.family.secondary};
    font-size:${({theme}) => theme.fonts.size.page.button};
    font-weight:${({theme}) => theme.fonts.weight.secondary};
`

const TextSpecial = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default TextSpecial;