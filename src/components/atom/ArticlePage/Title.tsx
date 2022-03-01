import React from 'react';
interface Ititle {
    title : string
}
const Title = ({title}:Ititle) => {
    return(
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}
export default Title;