import React from 'react';
import HeadingWrapper from './styles/HeadingWrapper';
interface Iheading {
    children:any
}
const Heading = ({children}) => {
    return(
        <HeadingWrapper>
            <h2>
                {children}
            </h2>
        </HeadingWrapper>
    )
}
export default Heading;