import React from 'react';
interface Isources{
    children : any
}
const Sources = ({children}:Isources) => {
    return(
        <div>
            {children}
        </div>
    )
}
export default Sources;