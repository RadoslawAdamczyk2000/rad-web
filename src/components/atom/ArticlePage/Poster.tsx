import React from 'react';
interface Iposter {
    path : string,
    title : string
}
const Poster = ({path,title}:Iposter) => {
    return(
        <figure>
            <img
                alt={`${title} RadWEB`}
                src={path}
                title={title}
            />
        </figure>
    )
}
export default Poster;