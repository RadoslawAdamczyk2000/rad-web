import React from 'react';
interface Itext {
    children : any
}
const Text = ({children}:Itext) => {
    return(
        <div>
            {children}
        </div>
    )
}
export default Text;