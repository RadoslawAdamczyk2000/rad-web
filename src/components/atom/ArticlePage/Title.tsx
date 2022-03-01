import React from 'react';
import TitleWrapper from './styles/TitleWrapper';
interface Ititle {
    title : string
}
const Title = ({title}:Ititle) => {
    return(
        <TitleWrapper>
            <h1>
                {title}
            </h1>
        </TitleWrapper>
    )
}
export default Title;