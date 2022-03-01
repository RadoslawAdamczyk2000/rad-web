import React from 'react';
import ExcerptWrapper from './styles/ExcerptWrapper';
interface Iexcerpt {
    children : any
}
const Excerpt = ({children}:Iexcerpt) => {
    return(
        <ExcerptWrapper>
            <p>
                {children}
            </p>
        </ExcerptWrapper>
    )
}
export default Excerpt;