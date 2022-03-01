import React from 'react';
import TextWrapper from './styles/TextWrapper';
interface Itext {
    children : any
}
const Text = ({children}:Itext) => {
    return(
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}
export default Text;