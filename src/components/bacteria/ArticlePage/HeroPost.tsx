import React from 'react';
import HeroPostWrapper from './styles/HeroPostWrapper';
interface IheroPost {
    children : any
}
const HeroPost = ({children}:IheroPost) => {
    return(
        <HeroPostWrapper>
            {children}
        </HeroPostWrapper>
    )
}
export default HeroPost;