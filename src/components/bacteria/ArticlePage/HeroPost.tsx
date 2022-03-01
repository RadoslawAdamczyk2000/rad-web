import React from 'react';
interface IheroPost {
    children : any
}
const HeroPost = ({children}:IheroPost) => {
    return(
        <header>
            {children}
        </header>
    )
}
export default HeroPost;