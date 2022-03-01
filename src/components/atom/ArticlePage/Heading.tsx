import React from 'react';
interface Iheading {
    children:any
}
const Heading = ({children}) => {
    return(
        <div>
            <h2>
                {children}
            </h2>
        </div>
    )
}
export default Heading;