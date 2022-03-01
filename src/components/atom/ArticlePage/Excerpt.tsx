import React from 'react';
interface Iexcerpt {
    children : any
}
const Excerpt = ({children}:Iexcerpt) => {
    return(
        <div>
            <p>
                {children}
            </p>
        </div>
    )
}
export default Excerpt;