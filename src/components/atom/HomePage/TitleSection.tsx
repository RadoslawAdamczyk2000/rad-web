import React from 'react';
import TitleSectionWrapper from './styles/TitleSectionWrapper';
interface ItitleSection {
    isSmall ?: boolean,
    title : string
}
const TitleSection = ({isSmall=false,title}:ItitleSection) => {
    return(
        <TitleSectionWrapper>
            {
                isSmall ?
                <h5>
                    {title}
                </h5> :
                 <h2>
                     {title}
                 </h2>
            }
           
        </TitleSectionWrapper>
    )
}
export default TitleSection;