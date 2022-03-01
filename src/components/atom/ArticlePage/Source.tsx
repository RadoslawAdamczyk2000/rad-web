import React from 'react';
const Source = ({path}:{path:string}) => {
    return(
        <a href={path}>
            {path}
        </a>
    )
}
export default Source;