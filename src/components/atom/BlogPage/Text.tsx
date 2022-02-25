import React from 'react';
import TextWrapper from './styles/TextWrapper';
const Text = ({children}:{children:any}) => {
    return(
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}
export default Text;