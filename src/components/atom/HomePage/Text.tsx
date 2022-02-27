import React from 'react'
import TextWrapper from './styles/TextWrapper';
interface Itext {
    children : any,
    isMain ?: boolean
}
const Text = ({children,isMain=false}:Itext) => {
    return(
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}
export default Text;