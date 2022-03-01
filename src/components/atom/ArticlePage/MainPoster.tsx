import React from 'react';
interface ImainPoster {
    path : string,
    title : string
}
const MainPoster = ({path,title}:ImainPoster) => {
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
export default MainPoster;