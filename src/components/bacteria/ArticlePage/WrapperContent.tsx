import React from 'react';
import WrapperContentWrapper from './styles/WrapperContentWrapper';
interface IwrapperContent {
    children : any
}
const WrapperContent = ({children}:IwrapperContent) => {
    return(
        <WrapperContentWrapper>
            {children}
        </WrapperContentWrapper>
    )
}
export default WrapperContent;