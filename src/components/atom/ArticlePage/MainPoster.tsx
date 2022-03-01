import MainPosterWrapper from './styles/MainPosterWrapper';
import React from 'react';
interface ImainPoster {
    path : string,
    title : string
}
const MainPoster = ({path,title}:ImainPoster) => {
    return(
        <MainPosterWrapper>
            <img
                alt={`${title} RadWEB`}
                src={path}
                title={`${title} - RadWEB`}
            />
        </MainPosterWrapper>
    )
}
export default MainPoster;