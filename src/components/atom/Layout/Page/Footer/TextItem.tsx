import React from 'react';
import TextItemWrapper from './styles/TextItemWrapper';
interface ItextItem {
    children : any,
    isBrand ?: boolean
}
const TextItem = ({children,isBrand=false}:ItextItem) => {
    return(
        <TextItemWrapper>
            {
                isBrand ? 
                <strong>
                    {children}
                </strong> :
                <p>
                    {children}
                </p>
            }
        </TextItemWrapper>
    )
}
export default TextItem;