import React from 'react';
import TitleSectionWrapper from './styles/TitleSectionWrapper';
const TitleSection = ({title}:{title:string}) => {
    return(
        <TitleSectionWrapper>
            <h2>
                {title}
            </h2>
        </TitleSectionWrapper>
    )
}
export default TitleSection;