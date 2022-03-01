import React from 'react';
interface IwrapperContent {
    children : any
}
const WrapperContent = ({children}:IwrapperContent) => {
    return(
        <div>
            {children}
        </div>
    )
}
export default WrapperContent;