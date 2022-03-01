import React from 'react';
interface IheroProject {
    children : any
}
const HeroProject = ({children}:IheroProject) => {
    return(
        <header>
            {children}
        </header>
    )
}
export default HeroProject;