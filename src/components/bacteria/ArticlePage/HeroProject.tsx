import React from 'react';
import HeroProjectWrapper from './styles/HeroProjectWrapper';
interface IheroProject {
    children : any
}
const HeroProject = ({children}:IheroProject) => {
    return(
        <HeroProjectWrapper>
            {children}
        </HeroProjectWrapper>
    )
}
export default HeroProject;