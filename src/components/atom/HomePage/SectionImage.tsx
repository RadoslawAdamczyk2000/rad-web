import React from 'react';
import SectionImageWrapper from './styles/SectionImageWrapper';
interface IsectionImage {
    center : boolean,
    end : boolean,
    imagePath : string, 
    start : boolean
}
const SectionImage = ({center,end,imagePath,start}:IsectionImage) => {
    return(
        <SectionImageWrapper
            center={center}
            end={end}
            start={start}
        >
            <img
                alt='section image'
                src={imagePath}
            />
        </SectionImageWrapper>
    )
}
export default SectionImage;